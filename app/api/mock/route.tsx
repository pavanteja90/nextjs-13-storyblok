import { NextResponse, NextRequest } from "next/server";
import data from "./sample";

// http://localhost:3000/api/mock

const handler = async (req: NextRequest, res: NextResponse) => {
  try {
    if (req.method === "GET") {
      return NextResponse.json(data[0]);
    }

    if (req.method === "POST") {
      const { vertical } = await req.json();
      const slice = data.find((entry) => entry.category === vertical);
      return NextResponse.json(
        slice || { msg: `No product found for vertical: ${vertical}` }
      );
    }
  } catch (error) {
    return NextResponse.json({
      msg: `Received unexpected method: ${req.method}`, error
    });
  }
};

export { handler as GET, handler as POST };
