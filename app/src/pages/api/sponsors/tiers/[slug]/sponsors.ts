import sponsorsEn from "@/data/sponsors/resf.en.json";

import type { NextApiRequest, NextApiResponse } from "next";

type ResponseType = any;

const ResponseNotFound = (res: NextApiResponse<ResponseType>) => {
  return res
    .status(404)
    .json({ message: "Unable to find a tier with that slug." });
};

export default function SponsorTierDetails(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({ message: "You must provide a slug." });
  }

  if (Array.isArray(slug)) {
    return res
      .status(400)
      .json({ message: "Unable to accept arrays as slug." });
  }

  let targetTier = sponsorsEn.tiers.find(
    (tier) => tier.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!targetTier) {
    return ResponseNotFound(res);
  }

  res.status(200).json(targetTier.sponsors);
}
