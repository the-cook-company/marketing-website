type PublicEnvironmentVariable = {
  value: string;
};

type PublicEnvironmentVariableNames = "googleMapsApiKey";

type PublicEnvironmentVariables = Record<
  PublicEnvironmentVariableNames,
  PublicEnvironmentVariable
>;

const publicEnvironmentVariables: PublicEnvironmentVariables = {
  googleMapsApiKey: { value: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY },
};

export { publicEnvironmentVariables };
