import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Block access to logs directory
  if (request.nextUrl.pathname.startsWith('/logs')) {
    return NextResponse.redirect(new URL('/404', request.url));
  }
  
  return NextResponse.next();
}

// Configure which paths the middleware runs on
export const config = {
  matcher: ['/logs/:path*'],
}; 