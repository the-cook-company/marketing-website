import { Container, Stack } from "@chakra-ui/react";
import { FunctionComponent, ReactNodeArray } from "react";
import { useNavigationBar } from "./context";

type NavigationMenuProps = {
  direction: "row" | "column";
};

const NavigationMenu: FunctionComponent<NavigationMenuProps> = ({
  direction,
}) => {
  const [state] = useNavigationBar();

  return <Stack direction={direction}>{state.navigationLinks}</Stack>;
};

export { NavigationMenu };
