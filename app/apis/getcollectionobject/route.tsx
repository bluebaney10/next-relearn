import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // return NextResponse.json("hello");
  return NextResponse.json([
    { id: 1, name: "Blue" },
    { id: 2, name: "Red" },
  ]);
}
