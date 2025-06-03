import { NextRequest, NextResponse } from "next/server";
import schema from "@/app/apis/validationwithzod/users/schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}
