import { prisma } from "../../../lib/prisma";
import { NextResponse,NextRequest } from "next/server";


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const res = await prisma.project.findUnique({
    where: {
      id: id? id : '',
    }
  })  
  if (!res) {
    return new NextResponse('Not Found',{ status: 400 });
  }
  const data = await JSON.stringify(res);
  return new NextResponse(data,{ status: 200 });
}