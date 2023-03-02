import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const years = await prisma.year.findMany({
    orderBy: {
      year: "desc",
    },
    include: {
      project:{
        where:{
          published:true
        },
        select:{
          name:true,
          image:true,
        }
      }
    },
  });
  const data = JSON.stringify(years);
  return new NextResponse(data);
}
