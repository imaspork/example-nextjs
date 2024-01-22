import { NextRequest, NextResponse } from "next/server";

// Nextjs has dumb aggressive cache that serves stale data. This fixes that until i find a true fix. ADD TO ALL ROUTES
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    //    Do mongodb query to get data
    // NextJS response handles status codes, but you can send manual codes with a quick google.

    return NextResponse.json({ message: "Success!" });
  } catch (err) {
    return NextResponse.json({ message: "Error during request", err });
  }
}

// Using a try catch here to send a success if try gets to the end, or meets a condition, and always sends an error if the try encountered an error.
