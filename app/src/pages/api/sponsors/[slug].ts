import sponsorsEn from "@/data/sponsors/resf.en.json";

import type { NextApiRequest, NextApiResponse } from "next";

type ResponseType = any;

const ResponseNotFound = (res: NextApiResponse<ResponseType>) => {
  return res
    .status(404)
    .json({ message: "Unable to find a sponsor with that slug." });
};

export default function SponsorDetails(
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

  const targetTier = sponsorsEn.tiers.find((tier) =>
    tier.sponsors.some(
      (sponsor) => sponsor.slug.toLowerCase() === slug.toLowerCase()
    )
  );

  if (!targetTier) {
    return ResponseNotFound(res);
  }

  const targetSponsor = targetTier.sponsors.find(
    (sponsor) => sponsor.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!targetSponsor) {
    return ResponseNotFound(res);
  }

  const targetSponsorWithPerks = {
    ...targetSponsor,
    hasLogo: targetTier.hasLogo,
    hasDescription: targetTier.hasDescription,
  };

  res.status(200).json(targetSponsorWithPerks);
}
