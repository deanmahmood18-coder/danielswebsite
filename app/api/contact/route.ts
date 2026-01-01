import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  budget?: string;
  message?: string;
  interests?: string[];
  website?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    if (payload.website) {
      return NextResponse.json(
        { message: 'Unable to submit.' },
        { status: 400 }
      );
    }

    if (!payload.name || !payload.email || !payload.message) {
      return NextResponse.json(
        { message: 'Please complete the required fields.' },
        { status: 400 }
      );
    }

    if (!emailRegex.test(payload.email)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    console.log('Sponsor enquiry received:', {
      name: payload.name,
      email: payload.email,
      company: payload.company ?? 'TBA',
      budget: payload.budget ?? 'TBA',
      interests: payload.interests ?? [],
      message: payload.message
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
