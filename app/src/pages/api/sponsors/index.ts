import sponsorsEn from "@/data/sponsors/resf.en.json";

import type { NextApiRequest, NextApiResponse } from "next";

type ResponseType = any;

export default function Sponsors(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { tier } = req.query; // TODO: Handle filtering by Tier slug.

  if (tier && Array.isArray(tier)) {
    return res.status(400).json({
      message:
        "Unable to accept arrays (or multiple query parameters) for tier.",
    });
  }

  let tiers;

  if (tier) {
    tiers = sponsorsEn.tiers.filter((t) => t.slug === tier);
  } else {
    tiers = sponsorsEn.tiers;
  }

  const sponsors = tiers.flatMap((t) =>
    t.sponsors.map((sponsor) => sponsor.slug)
  );

  res.status(200).json(sponsors);
}
