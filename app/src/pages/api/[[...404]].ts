import type { NextApiRequest, NextApiResponse } from "next";

export default function SponsorTierDetails(
  _req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) {
  res.status(404).json({ message: "API Endpoint Not Found!" });
}
