export interface RateLimitOptions {
  interval: number;
  uniqueTokenPerInterval: number;
}

export interface RateLimiter {
  check: (limit: number, token: string) => Promise<void>;
}

interface TokenCache {
  [token: string]: number[];
}

export function rateLimit({ interval, uniqueTokenPerInterval }: RateLimitOptions): RateLimiter {
  const tokenCache: TokenCache = {};
  
  // Clean up function to remove old entries
  setInterval(() => {
    const now = Date.now();
    Object.keys(tokenCache).forEach((token) => {
      tokenCache[token] = tokenCache[token].filter((timestamp) => {
        return now - timestamp < interval;
      });
      
      if (tokenCache[token].length === 0) {
        delete tokenCache[token];
      }
    });
  }, interval);
  
  return {
    check: (limit: number, token: string) => {
      // Initialize token timestamps if not exists
      if (!tokenCache[token]) {
        tokenCache[token] = [];
      }
      
      const now = Date.now();
      const timestamps = tokenCache[token];
      
      // Filter out timestamps older than the current interval
      const validTimestamps = timestamps.filter((timestamp) => {
        return now - timestamp < interval;
      });
      
      // Check if the number of valid timestamps exceeds the limit
      if (validTimestamps.length >= limit) {
        return Promise.reject(new Error('Rate limit exceeded'));
      }
      
      // Add current timestamp to the cache
      tokenCache[token] = [...validTimestamps, now];
      
      // Ensure we're not keeping more tokens than allowed per interval
      if (Object.keys(tokenCache).length > uniqueTokenPerInterval) {
        const oldestToken = Object.keys(tokenCache).sort((a, b) => {
          return Math.min(...tokenCache[a]) - Math.min(...tokenCache[b]);
        })[0];
        delete tokenCache[oldestToken];
      }
      
      return Promise.resolve();
    },
  };
} 