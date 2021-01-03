import { NextApiHandler } from "next";

const handler: NextApiHandler = (_req, res) => {
  res.clearPreviewData();
  res.redirect("/");
};

export default handler;
