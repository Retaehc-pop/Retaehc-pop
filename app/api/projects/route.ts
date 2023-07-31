import { prisma } from "../../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const highlight = searchParams.get('highlight')
  try{
    const res = await prisma.project.findMany({
      include:{
        tags: true,
        technologies: {
          select: { 
            name: true
          }
        },
      },
      where: highlight==='1' ? {  hilight: true } : { published: true },
      orderBy: { date: 'desc' }
    });
    const data = await JSON.stringify(res);
    return new NextResponse(data, { status: 200 });
  }
  catch(err:any){
    return new NextResponse(err, { status: 404 });
  }
}
