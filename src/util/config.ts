type EnvironmentVariable = {
  readonly index: string;
} & (
  | {
      readonly required: true;
      readonly value: string;
    }
  | {
      readonly required: false;
      readonly value: string | undefined;
    }
);

type EnvironmentVariableNames =
  | "contentfulManagementApiAccessToken"
  | "contentfulDeliveryApiAccessToken"
  | "contentfulPreviewApiAccessToken"
  | "contentfulPreviewSecret"
  | "contentfulPreviewHost"
  | "contentfulEnvironment"
  | "contentfulSpaceId"
  | "npmPackageVersion"
  | "npmPackageName";

type EnvironmentVariables = Record<
  EnvironmentVariableNames,
  EnvironmentVariable
>;

const getEnvironmentVariableValue = (
  environmentVariable: EnvironmentVariable
): string => {
  const value = process.env[environmentVariable.index];

  if (environmentVariable.required && value === undefined) {
    throw new Error(
      `Required environment variable ${environmentVariable.index} is undefined`
    );
  }

  return value;
};

const environmentVariables: EnvironmentVariables = {
  contentfulManagementApiAccessToken: {
    required: true,
    index: "CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN",
    get value(): string {
      return getEnvironmentVariableValue(this);
    },
  },
  contentfulDeliveryApiAccessToken: {
    required: true,
    index: "CONTENTFUL_DELIVERY_API_ACCESS_TOKEN",
    get value(): string {
      return getEnvironmentVariableValue(this);
    },
  },
  contentfulPreviewApiAccessToken: {
    required: false,
    index: "CONTENTFUL_PREVIEW_API_ACCESS_TOKEN",
    get value(): string {
      return getEnvironmentVariableValue(this);
    },
  },
  contentfulEnvironment: {
    required: false,
    index: "CONTENTFUL_ENVIRONMENT",
    get value(): string {
      return getEnvironmentVariableValue(this);
    },
  },
  contentfulPreviewSecret: {
    required: true,
    index: "CONTENTFUL_PREVIEW_SECRET",
    get value(): string {
      return getEnvironmentVariableValue(this);
    },
  },
  contentfulPreviewHost: {
    required: true,
    index: "CONTENTFUL_PREVIEW_HOST",
    get value(): string {
      return getEnvironmentVariableValue(this);
    },
  },
  contentfulSpaceId: {
    required: true,
    index: "CONTENTFUL_SPACE_ID",
    get value(): string {
      return getEnvironmentVariableValue(this);
    },
  },
  npmPackageVersion: {
    required: false,
    index: "npm_package_version",
    get value(): string {
      return getEnvironmentVariableValue(this);
    },
  },
  npmPackageName: {
    required: false,
    index: "npm_package_name",
    get value(): string {
      return getEnvironmentVariableValue(this);
    },
  },
};

export { environmentVariables };
