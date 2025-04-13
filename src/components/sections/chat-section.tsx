'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../ui/button';
import { Send, Loader2, Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export function ChatSection() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi there! I'm Virtual Nithin. Ask me anything about my skills, experience, or interests!"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [memojiState, setMemojiState] = useState<'greeting' | 'thinking' | 'talking' | 'idle'>('greeting');
  const [typingText, setTypingText] = useState('');
  const [fullResponse, setFullResponse] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Function to handle fullscreen toggle
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    // Scroll to the section when entering/exiting fullscreen to ensure it's visible
    document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to focus the input field
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Function to simulate typing effect
  useEffect(() => {
    let typingTimer: NodeJS.Timeout;
    let charIndex = 0;
    
    if (isTyping && fullResponse) {
      typingTimer = setInterval(() => {
        if (charIndex <= fullResponse.length) {
          setTypingText(fullResponse.substring(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingTimer);
          setIsTyping(false);
          
          // Add the completed message to the messages array
          setMessages(prev => {
            // Remove the temporary empty message and add the complete one
            const withoutEmptyMessage = prev.filter((msg, idx) => 
              !(idx === prev.length - 1 && msg.role === 'assistant' && msg.content === '')
            );
            return [...withoutEmptyMessage, { role: 'assistant', content: fullResponse }];
          });
          
          // Reset state
          setFullResponse('');
          setTypingText('');
          
          // Focus the input after response is complete
          focusInput();
          
          // Return to idle after typing is complete
          setTimeout(() => {
            setMemojiState('idle');
          }, 1000);
        }
      }, 12); // Faster typing speed (reduced from 30ms to 12ms)
    }
    
    return () => clearInterval(typingTimer);
  }, [isTyping, fullResponse]);

  // Auto-scroll to bottom of messages - within the chat container
  useEffect(() => {
    if (messagesEndRef.current) {
      // Use requestAnimationFrame to ensure DOM has updated
      requestAnimationFrame(() => {
        const messagesContainer = messagesEndRef.current?.parentElement;
        if (messagesContainer) {
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
      });
    }
  }, [messages, typingText, isTyping]);

  // Initial greeting animation
  useEffect(() => {
    // Switch to idle after 3 seconds
    const timer = setTimeout(() => {
      setMemojiState('idle');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  // Get emoji based on current state
  const getEmoji = () => {
    switch(memojiState) {
      case 'greeting':
        return '👋';
      case 'thinking':
        return '🤔';
      case 'talking':
        return '💬';
      case 'idle':
      default:
        return '😊';
    }
  };

  // Get emoji animation class based on state
  const getAnimationClass = () => {
    switch(memojiState) {
      case 'greeting':
        return 'animate-wave';
      case 'thinking':
        return 'animate-pulse';
      case 'talking':
        return 'animate-bounce-subtle';
      default:
        return '';
    }
  };

  // Get emoji text description
  const getEmojiDescription = () => {
    switch(memojiState) {
      case 'greeting': 
        return "Hey there! I'm happy to help!";
      case 'thinking': 
        return "Hmm, let me think about that...";
      case 'talking': 
        return "Great question! Here's what I know...";
      case 'idle':
      default:
        return "Ask me anything about Nithin's skills or experience!";
    }
  };

  // Get expression text bubbles
  const getExpressionText = () => {
    switch(memojiState) {
      case 'greeting':
        return ["Hello!", "Hi there!", "Welcome!"];
      case 'thinking':
        return ["Let me see...", "Hmm...", "One moment..."];
      case 'talking':
        return ["I think...", "Well...", "Actually..."];
      case 'idle':
      default:
        return [];
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message to chat
    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setMemojiState('thinking');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      // Instead of adding the response directly, set up for typing animation
      setMemojiState('talking');
      setFullResponse(data.response);
      setIsTyping(true);
      
      // Add an empty message while typing is in progress
      if (!typingText) {
        setMessages(prev => [...prev, { role: 'assistant', content: '' }]);
      }
      
    } catch (error) {
      console.error('Error:', error);
      setMemojiState('idle');
      setFullResponse("Sorry, I'm having trouble connecting to my brain right now.");
      setIsTyping(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="chat-section" className={`py-16 px-4 relative overflow-hidden ${isFullscreen ? 'fixed inset-0 z-50 bg-[var(--background)] overflow-y-auto' : ''}`}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-[0.02] z-0"></div>
      <div className={`container mx-auto ${isFullscreen ? 'h-full flex flex-col' : ''}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Chat with Virtual Nithin</span>
          </h2>
          <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Have questions about my experience or skills? My AI twin is here to help!.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${isFullscreen ? 'flex-grow' : ''}`}>
          {/* Emoji container on left */}
          <div className={`${isFullscreen ? 'fixed left-8 bottom-8 z-10 md:static md:col-span-3' : 'col-span-1 md:col-span-5'} flex flex-col items-center`}>
            <div className={`relative ${isFullscreen ? 'w-32 h-32 md:w-60 md:h-60' : 'w-60 h-60 md:w-72 md:h-72'} transition-all duration-500`}>
              <div className="absolute inset-0 bg-[var(--primary)]/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
              
              {/* Expression bubbles */}
              {getExpressionText().length > 0 && (
                <div className="absolute w-full h-full">
                  {getExpressionText().map((text, index) => (
                    <div 
                      key={index}
                      className={`absolute text-sm bg-[var(--card)] px-3 py-1 rounded-full shadow-sm
                                 opacity-0 animate-float-and-fade
                                 ${index === 0 ? 'top-5 left-5' : 
                                   index === 1 ? 'top-12 right-3' : 
                                   'bottom-10 right-10'}`}
                      style={{
                        animationDelay: `${index * 0.8}s`,
                        animationDuration: '3s'
                      }}
                    >
                      {text}
                    </div>
                  ))}
                </div>
              )}
              
              <div className="relative w-full h-full flex items-center justify-center">
                <div className={`${isFullscreen ? 'text-6xl md:text-7xl' : 'text-8xl md:text-9xl'} ${getAnimationClass()}`}>
                  {getEmoji()}
                </div>
                
                {/* Human-like response indicator when talking */}
                {memojiState === 'talking' && (
                  <div className="absolute -top-4 right-10 text-xs bg-[var(--primary)]/10 px-2 py-1 rounded-full animate-fade-in-out">
                    typing...
                  </div>
                )}
                
                {/* Thinking indicator */}
                {memojiState === 'thinking' && (
                  <div className="absolute top-10 right-10 flex space-x-1">
                    <div className="w-2 h-2 bg-[var(--primary)]/50 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 bg-[var(--primary)]/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-[var(--primary)]/50 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                )}
              </div>
            </div>
            {!isFullscreen && (
              <div className="mt-4 text-center">
                <h3 className="text-xl font-medium">Virtual Nithin</h3>
                <p className="text-sm text-[var(--muted-foreground)]">
                  {getEmojiDescription()}
                </p>
                
                {/* Additional human-like detail */}
                {memojiState === 'idle' && (
                  <div className="mt-2 text-xs text-[var(--muted-foreground)]/70 animate-pulse-slow">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                    Online and ready to chat
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Chat container on right */}
          <div className={`${isFullscreen ? 'col-span-12 md:col-span-9 flex-grow' : 'col-span-1 md:col-span-7'}`}>
            <div className={`relative transition-all duration-500 ${isFullscreen ? 'h-[calc(100vh-200px)]' : 'h-[500px]'}`}>
              {/* Futuristic chat container */}
              <div className="absolute inset-0 bg-[var(--secondary)]/5 rounded-3xl transform rotate-1 animate-float"></div>
              <div className="relative backdrop-blur-sm bg-[var(--card)]/90 border border-[var(--border)] rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
                {/* Chat header */}
                <div className="bg-[var(--card)] border-b border-[var(--border)] p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="font-medium">Kind of an Interview?</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={toggleFullscreen}
                    className="text-xs"
                  >
                    {isFullscreen ? 'Minimize' : 'Expand'}
                  </Button>
                </div>
                
                {/* Chat messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {message.role === 'assistant' && (
                        <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                          <Bot size={16} className="text-[var(--primary)]" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                          message.role === 'user'
                            ? 'bg-[var(--primary)] text-white rounded-tr-none'
                            : 'bg-[var(--card)] border border-[var(--border)] rounded-tl-none'
                        }`}
                      >
                        {isTyping && index === messages.length - 1 && message.role === 'assistant' ? (
                          <p className="whitespace-pre-wrap text-sm">{typingText}</p>
                        ) : message.role === 'user' ? (
                          <p className="whitespace-pre-wrap text-sm">{message.content}</p>
                        ) : (
                          <div className="markdown-content">
                            <ReactMarkdown 
                              remarkPlugins={[remarkGfm]}
                              components={{
                                // Open external links in new tab
                                a: (props) => (
                                  <a target="_blank" rel="noopener noreferrer" {...props} />
                                ),
                                // Simplified code block component
                                code: ({className, children, ...props}) => {
                                  return (
                                    <code className={className} {...props}>
                                      {children}
                                    </code>
                                  );
                                },
                                // Basic pre tag handling for code blocks
                                pre: (props) => (
                                  <pre className="rounded-md bg-[var(--muted)]/30 p-2 overflow-auto my-2">
                                    {props.children}
                                  </pre>
                                )
                              }}
                            >
                              {message.content}
                            </ReactMarkdown>
                          </div>
                        )}
                      </div>
                      {message.role === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-[var(--secondary)]/10 flex items-center justify-center">
                          <User size={16} className="text-[var(--secondary)]" />
                        </div>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex items-start gap-3 justify-start">
                      <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                        <Bot size={16} className="text-[var(--primary)]" />
                      </div>
                      <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl rounded-tl-none px-4 py-2">
                        <Loader2 className="w-4 h-4 animate-spin text-[var(--muted-foreground)]" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                
                {/* Chat input */}
                <form onSubmit={handleSubmit} className="p-4 border-t border-[var(--border)] bg-[var(--card)]">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask me anything..."
                      className="flex-1 bg-[var(--background)] border border-[var(--border)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                      disabled={isLoading}
                      ref={inputRef}
                    />
                    <Button type="submit" variant="primary" disabled={isLoading || !input.trim()}>
                      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send size={16} />}
                    </Button>
                  </div>
                  <div className="text-xs text-[var(--muted-foreground)] mt-2 text-center">
                    Ask about my skills, experience, projects or interests!
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 