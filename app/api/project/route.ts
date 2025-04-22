import { prisma } from "../../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const name = searchParams.get('name');


  const res = await prisma.project.findUnique({
    where: {
      ...(id && { id }),
      ...(name && { name }),
    },
  })
  if (!res) {
    return new NextResponse('Not Found', { status: 400 });
  }

  return new NextResponse(JSON.stringify(res), { status: 200 });
}
