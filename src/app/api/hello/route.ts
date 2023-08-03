import { NextResponse } from "next/server";

export const GET = () => {
  try {
    return NextResponse.json({ message: "Tudo funcionando" }, { status: 201 });
  } catch (err: any) {
    return new Response(null, { status: 500 });
  }
};
