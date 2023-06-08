import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import data from "./sample";

// http://localhost:3000/api/mock

export const GET = (req: NextApiRequest, res: NextApiResponse) => {
  return NextResponse.json(data);
};
