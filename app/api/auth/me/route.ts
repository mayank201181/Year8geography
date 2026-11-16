import { NextResponse } from "next/server";
import { currentAccount } from "@/lib/server/session";
import { publicAccount } from "@/lib/server/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const cloud = !!process.env.BLOB_READ_WRITE_TOKEN || !!process.env.LOCAL_BLOB_DIR;
  if (!cloud) return NextResponse.json({ account: null, cloud }, { status: 200 });
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ account: null, cloud }, { status: 200 });
  return NextResponse.json({ account: publicAccount(acc), cloud });
}
