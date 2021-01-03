import { createClient } from "contentful";
import { privateEnvironmentVariables } from "util/environment-variables";

const sharedContentfulClientOptions = {
  space: privateEnvironmentVariables.contentfulSpaceId.value,
  environment: privateEnvironmentVariables.contentfulEnvironment.value,
  application: `${privateEnvironmentVariables.npmPackageName.value}/${privateEnvironmentVariables.npmPackageVersion}`,
};

const contentfulDeliveryApiClient = createClient({
  accessToken:
    privateEnvironmentVariables.contentfulDeliveryApiAccessToken.value,
  ...sharedContentfulClientOptions,
});

const contentfulPreviewApiClient = createClient({
  accessToken:
    privateEnvironmentVariables.contentfulPreviewApiAccessToken.value,
  host: privateEnvironmentVariables.contentfulPreviewHost.value,
  ...sharedContentfulClientOptions,
});

export { contentfulDeliveryApiClient, contentfulPreviewApiClient };
