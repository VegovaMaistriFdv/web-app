import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // console.log(req.headers)
    console.log(req.headers.get('host'))
    const host = req.headers.get('host')
    if (!host?.startsWith('localhost:') && !host?.startsWith('192.168.1.164')) return NextResponse.json({ status: 403 });
    const data = (await req.json()).fire;
    console.log(data);

    for (const element of data) {
      await prisma.fire.create({
        data: {
          ...element,
          source: 'esa'
        }
      });
    }

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error("[ERROR] Invalid POST request for /fire/esa");
    console.error(error);
    return NextResponse.json({ status: 500 });
  }
}
