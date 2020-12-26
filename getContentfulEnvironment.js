const { createClient } = require("contentful-management");
const dotenv = require("dotenv");

dotenv.config();

module.exports = async () => {
  const contentfulManagementClient = createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  });
  const space = await contentfulManagementClient.getSpace(
    process.env.CONTENTFUL_SPACE_ID
  );

  return space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT);
};
