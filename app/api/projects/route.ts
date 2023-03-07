import { prisma } from "../../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const searchParams = Object.fromEntries(request.nextUrl.searchParams);
  const hilight = request.nextUrl.searchParams.get('hilight');

  try{
    const res = await prisma.project.findMany({
      where: {
        published: true,
        hilight: hilight? Boolean(hilight):false,
      },
    });
    const data = await JSON.stringify(res);
    return new NextResponse(data, { status: 200 });
  }
  catch(err:any){
    return new NextResponse(err, { status: 400 });
  }
}
