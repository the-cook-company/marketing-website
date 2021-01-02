import { Alert, AlertIcon, Center, Spinner } from "@chakra-ui/react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { FunctionComponent } from "react";
import { publicEnvironmentVariables } from "util/environment-variables";

type AddressPhysicalProps = {
  longitude: number;
  latitude: number;
};

const AddressPhysical: FunctionComponent<AddressPhysicalProps> = ({
  longitude,
  latitude,
}) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: publicEnvironmentVariables.googleMapsApiKey.value,
  });

  return loadError !== undefined ? (
    <Alert status="error">
      <AlertIcon /> Error loading map.
    </Alert>
  ) : isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ height: "100%", width: "100%" }}
      center={{ lat: latitude, lng: longitude }}
      zoom={15}
    />
  ) : (
    <Center>
      <Spinner />
    </Center>
  );
};

export { AddressPhysical };
