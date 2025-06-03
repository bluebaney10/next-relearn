import { NextRequest, NextResponse } from "next/server";
import schema from "@/app/apis/validationwithzod/users/schema";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (user) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(newUser, { status: 201 });
}

/*
input:
http://localhost:3000/prisma/creatingobject
{
    "name":"Baney"
}

output:
{
    "id": 1,
    "name": "Baney"
}
->status 200 OK
->status 201 Created

input:
{
    "name":""
}

output:
{
    "error": "Name is required"
}

*/
