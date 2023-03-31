import sponsorsEn from "@/data/sponsors/resf.en.json";

import type { NextApiRequest, NextApiResponse } from "next";

type ResponseType = any;

export default function SponsorTiers(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  let tiers = sponsorsEn.tiers
    .sort((a, b) => a.order - b.order)
    .map((tier) => ({
      name: tier.name,
      slug: tier.slug,
      order: tier.order,
      hasLogo: tier.hasLogo,
      hasDescription: tier.hasDescription,
    }));

  res.status(200).json(tiers);
}
