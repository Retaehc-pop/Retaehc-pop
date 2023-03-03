import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";
export async function GET(req: Request) {
  const skill = await prisma.technology.findMany({
    // select:{
    //   name: true,
    // }
    include: {
      position: true,
    },
  });
  const data = JSON.stringify(skill);
  return new NextResponse(data);
}
