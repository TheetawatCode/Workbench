// ตัวอย่าง API สำหรับส่ง Contact form 
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // แค่รับ body มา แต่ยังไม่ต้องทำอะไรจริงจังก็ได้
  const data = await req.json().catch(() => null);

  return NextResponse.json(
    {
      success: true,
      message: "Contact endpoint placeholder",
      received: data,
    },
    { status: 200 }
  );
}
