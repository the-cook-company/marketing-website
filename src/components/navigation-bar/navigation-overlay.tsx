import { Box, Center, ChakraProps, Portal, SlideFade } from "@chakra-ui/react";
import { FunctionComponent, ReactNode } from "react";
import { useNavigationBar } from "./context";

type NavigationOverlayProps = {
  navigationOverlayTrigger: ReactNode;
  navigationMenu: ReactNode;
};

const NavigationOverlay: FunctionComponent<NavigationOverlayProps> = ({
  navigationOverlayTrigger,
  navigationMenu,
}) => {
  const [state] = useNavigationBar();
  const fullScreenStyle: ChakraProps = {
    position: "fixed",
    width: "full",
    height: "full",
    top: 0,
  };

  return (
    <Portal>
      <Box {...fullScreenStyle} bg="white.50" padding={6}>
        {navigationOverlayTrigger}
        <Center height="full">
          <SlideFade in={state.isNavigationOverlayVisible}>
            {navigationMenu}
          </SlideFade>
        </Center>
      </Box>
    </Portal>
  );
};

export { NavigationOverlay };
