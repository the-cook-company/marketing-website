import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Button, VisuallyHidden } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { useNavigationBar } from "./context";

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
          <CloseIcon />
        </>
      ) : (
        <>
          <VisuallyHidden>Open Navigation Overlay</VisuallyHidden>
          <HamburgerIcon />
        </>
      )}
    </Button>
  );
};

export { NavigationOverlayTrigger };
