import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // console.log(req.headers.get('host'))
    const host = req.headers.get('host')
    const MQTT_BROKER_IP = process.env.MQTT_BROKER_IP
    if (!host?.startsWith('localhost:') && MQTT_BROKER_IP && !host?.startsWith(MQTT_BROKER_IP)) return NextResponse.json({ status: 403 });

    const data = (await req.json()).fire;
    for (const fire of data) {
      console.log(fire)
      const geocoding = await fetch(`https://geocode.maps.co/reverse?lat=${fire.lat}&lon=${fire.lng}`)
      const placeName = (await geocoding.json()).display_name

      const existingFire = await prisma.fire.findFirst({
        where: {
          placeName,
          timestamp: fire.timestamp
        }
      })
      if (existingFire) continue

      const newFire = await prisma.fire.create({
        data: {
          ...fire,
          placeName
        }
      });
      // console.info(newFire)
    }

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error("[ERROR] Invalid POST request for /api/fire");
    console.error(error);
    return NextResponse.json({ status: 500 });
  }
}
