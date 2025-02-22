import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const COOKIE_NAME = "cherlygood_session";

export async function POST() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete(COOKIE_NAME);
    return NextResponse.json({
      success: true,
      redirect: "/",
    });
  } catch {
    return NextResponse.json({ error: "Failed to logout" }, { status: 500 });
  }
}
