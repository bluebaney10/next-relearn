import { NextRequest, NextResponse } from "next/server";
import schema from "@/app/apis/validationwithzod/users/schema";
import prisma from "@/prisma/client";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser);
}

/*
input:
http://localhost:3000/prisma/updateobject/1
{
    "name":"Baney"
}

output:
{
    "id": 1,
    "name": "Baney"
}
*/
