import { Stack } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { useNavigationBar } from "./context";

type NavigationMenuProps = {
  direction: "row" | "column";
};

const NavigationMenu: FunctionComponent<NavigationMenuProps> = ({
  direction,
}) => {
  const [state] = useNavigationBar();

  return (
    <Stack spacing={6} direction={direction}>
      {state.navigationLinks}
    </Stack>
  );
};

export { NavigationMenu };
