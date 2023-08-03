import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { message: "Você não está logado" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
};
