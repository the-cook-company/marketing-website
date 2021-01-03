import { NextApiHandler } from "next";
import { privateEnvironmentVariables } from "util/environment-variables";
import { fetchPage } from "util/contentful";

const handler: NextApiHandler = async (req, res) => {
  if (
    req.query.secret !==
    privateEnvironmentVariables.contentfulPreviewSecret.value
  ) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const page = await fetchPage({
    preview: true,
    slug: req.query.slug.toString(),
  });

  if (!page) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  res.setPreviewData({});
  res.redirect(`/pages/${page.fields.slug}`);
};

export default handler;
