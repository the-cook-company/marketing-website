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
        <Box position="relative" height="50px">
          <NextImage
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
