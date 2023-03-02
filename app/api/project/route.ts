import { NextResponse } from "next/server"
import { prisma } from "../../../lib/prisma";
export async function GET(req: Request) {
  
  return new NextResponse('Hello World')
}