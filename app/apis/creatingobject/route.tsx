import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });

  //return NextResponse.json(body);
  return NextResponse.json(
    {
      id: 1,
      name: body.name,
    },
    { status: 201 }
  );
}

/*
input:
http://localhost:3000/apis/creatingobject
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
