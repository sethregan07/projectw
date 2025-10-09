import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Try to connect to the auth service health endpoint
    const response = await fetch('http://localhost:3001/health', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      return NextResponse.json(
        { status: 'error', message: 'Auth service is not responding properly' },
        { status: response.status }
      );
    }
    
    const data = await response.json();
    return NextResponse.json({ status: 'ok', service: data.service });
  } catch (error) {
    console.error('Health check error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Auth service is not available' },
      { status: 500 }
    );
  }
}