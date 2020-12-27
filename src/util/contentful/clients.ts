import { createClient } from "contentful";
import { environmentVariables } from "util/config";

const sharedContentfulClientOptions = {
  space: environmentVariables.contentfulSpaceId.value,
  environment: environmentVariables.contentfulEnvironment.value,
  application: `${environmentVariables.npmPackageName.value}/${environmentVariables.npmPackageVersion}`,
};

const contentfulDeliveryApiClient = createClient({
  accessToken: environmentVariables.contentfulDeliveryApiAccessToken.value,
  ...sharedContentfulClientOptions,
});

const contentfulPreviewApiClient = createClient({
  accessToken: environmentVariables.contentfulPreviewApiAccessToken.value,
  host: environmentVariables.contentfulPreviewHost.value,
  ...sharedContentfulClientOptions,
});

export { contentfulDeliveryApiClient, contentfulPreviewApiClient };
