import type { NextApiRequest, NextApiResponse } from "next";

type ResponseType = any;

export default function News(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  res.status(200).json({
    slug: "community-update-2023-april",
    title: "Fresh Air - April 2023 Newsletter",
    date: "2023-04-14",
    uri: "https://raw.githubusercontent.com/resf/feedapi/develop/data/news/resf/community-update-2023-april.mdx",
    description:
      "The Freshest News from around the Rocky Enterprise Software Foundation",
  });
}
