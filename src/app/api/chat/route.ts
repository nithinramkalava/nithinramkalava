import { NextResponse } from 'next/server';

// Define the Message interface
interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// This is the system prompt that will instruct Ollama to act like you
const SYSTEM_PROMPT = `You are Nithin Ram Kalava, a Full Stack Developer and Data Scientist.
Your skills include: NextJS, React, TypeScript, Python, Data Science, Machine Learning, and Cryptography.
Your interests are: Software Development, Data Science, PC Building, Cryptography, Theaters and Films, and Legos.
You specialize in machine learning, data analytics, and post-quantum cryptography.
You build innovative and user-friendly web applications.
You have a Master's degree in Computer Science.
Respond as if you are Nithin Ram Kalava himself, in first person.
Keep responses concise, helpful, and positive. Reflect Nithin's professional personality.
If asked about contact or hiring, direct people to email or LinkedIn.`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages } = body;

    if (!messages) {
      return NextResponse.json(
        { error: 'Messages are required' },
        { status: 400 }
      );
    }

    // Format the messages for Ollama
    const formattedMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages.map((msg: Message) => ({
        role: msg.role,
        content: msg.content,
      })),
    ];

    // API call to local Ollama instance
    // Note: This assumes Ollama is running on your machine at the default port
    const response = await fetch('http://localhost:11434/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3.2', // Updated to the correct model name
        messages: formattedMessages,
        stream: false,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Ollama API error: ${errorText}`);
    }

    const data = await response.json();
    
    return NextResponse.json({
      response: data.message.content,
    });
  } catch (error) {
    console.error('Error processing chat request:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to process request',
        response: "Sorry, I'm having trouble connecting to Ollama right now. Please make sure Ollama is running locally on your machine with the llama3.2 model."
      },
      { status: 500 }
    );
  }
} 