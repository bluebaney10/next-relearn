import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: number };
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //Validate the request body
  //If invalid, return 400 bad request
  const body = await request.json();
  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: body.name });

  //Fetch the user with the given id
  //if doesn't exist, return 404
  //update the user
  //Return the updated user
}

/*
input:
http://localhost:3000/apis/updateobject/1
{
    "name":"Baney"
}

output:
{
    "id": 1,
    "name": "Baney"
}
*/
