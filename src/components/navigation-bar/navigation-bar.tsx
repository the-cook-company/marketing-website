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

  return (
    <Flex minHeight={24} alignItems="center" shadow="md">
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
