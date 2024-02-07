import { prisma } from "../../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const highlight = searchParams.get('highlight')
  try{
    if (highlight === "1"){
      const res = await prisma.project.findMany({
        include: {
          tags: true,
          technologies: {
            select: {
              name: true,
            },
          },
        },
        where: {
          published: true,
          hilight: true,
        }
      });
      const data = await JSON.stringify(res);
      return new NextResponse(data, { status: 200 });
    }else{
      const res = await prisma.project.findMany({
        include: {
          tags: true,
          technologies: {
            select: {
              name: true,
            },
          },
        },
        where: {
          published: true,
        },
      });
      const data = await JSON.stringify(res);
      return new NextResponse(data, { status: 200 });
    }
      
    
    
  }
  catch(err:any){
    return new NextResponse(err, { status: 400 });
  }
}
