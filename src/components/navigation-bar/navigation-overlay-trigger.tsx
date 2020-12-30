import { Button, Icon, VisuallyHidden } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { useNavigationBar } from "./context";
import { Menu, X } from "react-feather";

const NavigationOverlayTrigger: FunctionComponent = () => {
  const [state, dispatch] = useNavigationBar();

  return (
    <Button
      variant="ghost"
      onClick={() => dispatch({ type: "triggerOverlayVisibility" })}
    >
      {state.isNavigationOverlayVisible ? (
        <>
          <VisuallyHidden>Close Navigation Overlay</VisuallyHidden>
          <Icon as={X} />
        </>
      ) : (
        <>
          <VisuallyHidden>Open Navigation Overlay</VisuallyHidden>
          <Icon as={Menu} />
        </>
      )}
    </Button>
  );
};

export { NavigationOverlayTrigger };
