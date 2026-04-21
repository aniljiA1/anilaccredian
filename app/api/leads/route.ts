import { NextResponse } from "next/server";

let leads: any[] = []; // temporary in-memory storage

export async function GET() {
  return NextResponse.json(leads);
}

export async function POST(req: Request) {
  const body = await req.json();
  leads.push(body);

  return NextResponse.json({ success: true, data: body });
}
