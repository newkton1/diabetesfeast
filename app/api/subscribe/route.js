import { NextResponse } from 'next/server';
import { appendFileSync } from 'fs';
import { join } from 'path';

const CSV_PATH = join(process.cwd(), 'waitlist.csv');

export async function POST(req) {
  const { email } = await req.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  const line = `${new Date().toISOString()},${email}\n`;
  appendFileSync(CSV_PATH, line, 'utf8');

  return NextResponse.json({ ok: true });
}
