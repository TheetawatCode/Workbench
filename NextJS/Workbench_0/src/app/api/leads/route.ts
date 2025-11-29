// ตัวอย่าง API เก็บ leads 
// src/app/api/leads/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json().catch(() => null);

  return NextResponse.json(
    {
      success: true,
      message: "Leads endpoint placeholder",
      received: data,
    },
    { status: 200 }
  );
}
