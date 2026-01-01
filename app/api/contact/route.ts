import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM;
    const smtpTo = process.env.SMTP_TO;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !smtpFrom || !smtpTo) {
      return NextResponse.json(
        { message: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: Number(smtpPort) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    await transporter.sendMail({
      from: smtpFrom,
      to: smtpTo,
      replyTo: payload.email,
      subject: 'New sponsor enquiry',
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Company: ${payload.company ?? 'TBA'}`,
        `Budget: ${payload.budget ?? 'TBA'}`,
        `Interests: ${(payload.interests ?? []).join(', ') || 'TBA'}`,
        '',
        payload.message
      ].join('\\n')
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
