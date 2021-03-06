import {
  Center,
  Container,
  Flex,
  Spacer,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FunctionComponent, ReactNode } from "react";
import { useNavigationBar } from "./context";

type NavigationBarProps = {
  navigationOverlayTrigger: ReactNode;
  navigationOverlay: ReactNode;
  logo: ReactNode;
  navigationMenu: ReactNode;
  breakpoint: string;
  maxWidth: string;
};

const NavigationBar: FunctionComponent<NavigationBarProps> = ({
  navigationOverlayTrigger,
  navigationOverlay,
  logo,
  navigationMenu,
  breakpoint,
  maxWidth,
}) => {
  const [state] = useNavigationBar();
  const isNavigationOverlayTriggerVisible = useBreakpointValue({
    base: true,
    [breakpoint]: false,
  });
  const isNavigationMenuVisible = useBreakpointValue({
    base: false,
    [breakpoint]: true,
  });
  const containerBorderTopWidth = useBreakpointValue({
    base: 0,
    md: 6,
  });
  const containerBorderLeftWidth = useBreakpointValue({
    base: 6,
    md: 0,
  });

  return (
    <Flex
      boxSizing="content-box"
      minHeight={24}
      alignItems="center"
      borderTop={containerBorderTopWidth}
      borderLeft={containerBorderLeftWidth}
      borderStyle="solid"
      borderColor="red.700"
    >
      <Container maxWidth={maxWidth}>
        <Stack direction="row">
          <Center>
            {isNavigationOverlayTriggerVisible
              ? navigationOverlayTrigger
              : null}
          </Center>
          {state.isNavigationOverlayVisible ? navigationOverlay : null}
          <Center>{logo}</Center>
          <Spacer />
          <Center>{isNavigationMenuVisible ? navigationMenu : null}</Center>
        </Stack>
      </Container>
    </Flex>
  );
};

export { NavigationBar };
