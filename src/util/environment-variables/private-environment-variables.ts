type PrivateEnvironmentVariable = {
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

type PrivateEnvironmentVariableNames =
  | "contentfulManagementApiAccessToken"
  | "contentfulDeliveryApiAccessToken"
  | "contentfulPreviewApiAccessToken"
  | "contentfulPreviewSecret"
  | "contentfulPreviewHost"
  | "contentfulEnvironment"
  | "contentfulSpaceId"
  | "smtpHost"
  | "smtpPort"
  | "smtpUsername"
  | "smtpPassword"
  | "contactEmailFrom"
  | "contactEmailTo"
  | "contactEmailSubject"
  | "npmPackageVersion"
  | "npmPackageName";

type PrivateEnvironmentVariables = Record<
  PrivateEnvironmentVariableNames,
  PrivateEnvironmentVariable
>;

const getPrivateEnvironmentVariableValue = (
  environmentVariable: PrivateEnvironmentVariable
): string => {
  const value = process.env[environmentVariable.index];

  if (environmentVariable.required && value === undefined) {
    throw new Error(
      `Required environment variable ${environmentVariable.index} is undefined`
    );
  }

  return value;
};

const privateEnvironmentVariables: PrivateEnvironmentVariables = {
  contactEmailFrom: {
    required: true,
    index: "CONTACT_EMAIL_FROM",
    get value(): string {
      return getPrivateEnvironmentVariableValue(this);
    },
  },
  contactEmailTo: {
    required: true,
    index: "CONTACT_EMAIL_TO",
    get value(): string {
      return getPrivateEnvironmentVariableValue(this);
    },
  },
  contactEmailSubject: {
    required: true,
    index: "CONTACT_EMAIL_SUBJECT",
    get value(): string {
      return getPrivateEnvironmentVariableValue(this);
    },
  },
  smtpPort: {
    required: true,
    index: "SMTP_PORT",
    get value(): string {
      return getPrivateEnvironmentVariableValue(this);
    },
  },
  smtpHost: {
    required: true,
    index: "SMTP_HOST",
    get value(): string {
      return getPrivateEnvironmentVariableValue(this);
    },
  },
  smtpUsername: {
    required: true,
    index: "SMTP_USERNAME",
    get value(): string {
      return getPrivateEnvironmentVariableValue(this);
    },
  },
  smtpPassword: {
    required: true,
    index: "SMTP_PASSWORD",
    get value(): string {
      return getPrivateEnvironmentVariableValue(this);
    },
  },
  contentfulManagementApiAccessToken: {
    required: true,
    index: "CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN",
    get value(): string {
      return getPrivateEnvironmentVariableValue(this);
    },
  },
  contentfulDeliveryApiAccessToken: {
    required: true,
    index: "CONTENTFUL_DELIVERY_API_ACCESS_TOKEN",
    get value(): string {
      return getPrivateEnvironmentVariableValue(this);
    },
  },
  contentfulPreviewApiAccessToken: {
    required: false,
    index: "CONTENTFUL_PREVIEW_API_ACCESS_TOKEN",
    get value(): string {
      return getPrivateEnvironmentVariableValue(this);
    },
  },
  contentfulEnvironment: {
    required: false,
    index: "CONTENTFUL_ENVIRONMENT",
    get value(): string {
      return getPrivateEnvironmentVariableValue(this);
    },
  },
  contentfulPreviewSecret: {
    required: true,
    index: "CONTENTFUL_PREVIEW_SECRET",
    get value(): string {
      return getPrivateEnvironmentVariableValue(this);
    },
  },
  contentfulPreviewHost: {
    required: true,
    index: "CONTENTFUL_PREVIEW_HOST",
    get value(): string {
      return getPrivateEnvironmentVariableValue(this);
    },
  },
  contentfulSpaceId: {
    required: true,
    index: "CONTENTFUL_SPACE_ID",
    get value(): string {
      return getPrivateEnvironmentVariableValue(this);
    },
  },
  npmPackageVersion: {
    required: false,
    index: "npm_package_version",
    get value(): string {
      return getPrivateEnvironmentVariableValue(this);
    },
  },
  npmPackageName: {
    required: false,
    index: "npm_package_name",
    get value(): string {
      return getPrivateEnvironmentVariableValue(this);
    },
  },
};

export { privateEnvironmentVariables };
