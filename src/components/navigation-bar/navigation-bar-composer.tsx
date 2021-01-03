import { FunctionComponent } from "react";
import { NavigationBarProvider } from "./context";
import { NavigationBar } from "./navigation-bar";
import { NavigationLink } from "./navigation-link";
import { NavigationMenu } from "./navigation-menu";
import { NavigationOverlay } from "./navigation-overlay";
import { NavigationOverlayTrigger } from "./navigation-overlay-trigger";
import { v4 as uuid } from "uuid";
import NextImage from "next/image";
import NextLink from "next/link";
import { Box } from "@chakra-ui/react";

type NavigationBarComposerProps = {
  element: Contentful.INavigationBar;
};

const NavigationBarComposer: FunctionComponent<NavigationBarComposerProps> = ({
  element,
}) => {
  const navigationLinks = element.fields.entries.map((entry) => (
    <NavigationLink
      key={uuid()}
      title={entry.fields.title}
      path={`/pages/${entry.fields.slug}`}
    />
  ));

  return (
    <NavigationBarProvider
      initialState={{ isNavigationOverlayVisible: false, navigationLinks }}
    >
      <NavigationBar
        navigationOverlayTrigger={<NavigationOverlayTrigger />}
        navigationOverlay={
          <NavigationOverlay
            navigationOverlayTrigger={<NavigationOverlayTrigger />}
            navigationMenu={<NavigationMenu direction="column" />}
          />
        }
        logo={
          <Box position="relative" width="100px" height="50px">
            <NextLink href={`/pages/${element.fields.logoEntry.fields.slug}`}>
              <a>
                <NextImage
                  src={`https:${element.fields.logo.fields.file.url}`}
                  alt={element.fields.logo.fields.title}
                  layout="fill"
                  objectFit="contain"
                />
              </a>
            </NextLink>
          </Box>
        }
        navigationMenu={<NavigationMenu direction="row" />}
        breakpoint="md"
        maxWidth="6xl"
      />
    </NavigationBarProvider>
  );
};

export { NavigationBarComposer };
