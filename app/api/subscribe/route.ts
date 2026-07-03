import { NextRequest, NextResponse } from "next/server";
import { subscribeEmail } from "@/lib/subscribe";

export async function POST(req: NextRequest) {
  const { email, name, role, source } = await req.json();

  const result = await subscribeEmail({ email, name, role, source: source ?? "unknown" });

  if (!result.ok) {
    const status = result.reason === "already_exists" ? 409 : result.reason === "invalid" ? 400 : 500;
    return NextResponse.json({ error: result.reason, message: result.message }, { status });
  }

  return NextResponse.json({ message: "Subscribed!" });
}