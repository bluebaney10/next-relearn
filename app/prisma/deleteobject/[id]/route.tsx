import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: number };
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //Fetch user from db
  //If not found, return 404
  //Delete the user
  //Return 200

  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({});
}

/*
input:
http://localhost:3000/apis/deleteobject/1


output:
{
    
}
*/
