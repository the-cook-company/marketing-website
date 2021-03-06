import { FunctionComponent } from "react";
import { Footer } from "./footer";
import NextImage from "next/image";
import { Box } from "@chakra-ui/react";

type FooterComposerProps = {
  element: Contentful.IFooter;
};

const FooterComposer: FunctionComponent<FooterComposerProps> = ({
  element,
}) => {
  return (
    <Footer
      logo={
        <Box position="relative" height="50px" bg="white.50">
          <NextImage
            quality={1}
            src={`https:${element.fields.logo.fields.file.url}`}
            alt={element.fields.logo.fields.title}
            layout="fill"
            objectFit="contain"
          />
        </Box>
      }
      copyright={element.fields.copyright}
      pages={element.fields.pages}
    />
  );
};

export { FooterComposer };
