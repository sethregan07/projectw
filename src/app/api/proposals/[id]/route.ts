import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'http://102.215.228.243:3001';

// GET /api/proposals/[id] - Get a specific proposal
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const response = await fetch(`${BACKEND_URL}/api/proposals/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { message: errorData.message || 'Failed to fetch proposal' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching proposal:', error);
    return NextResponse.json(
      { message: 'Server error fetching proposal' },
      { status: 500 }
    );
  }
}