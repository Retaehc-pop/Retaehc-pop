import { prisma } from "../../../lib/prisma";
import { NextResponse,NextRequest } from "next/server";


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const year = Number(searchParams.get('year'))
  const res = await prisma.project.findMany({
    where: {
      year : year? year : 0,
    }
  })  
  if (!res) {
    return new NextResponse('Not Found',{ status: 400 });
  }
  const data = await JSON.stringify(res);
  return new NextResponse(data,{ status: 200 });
}