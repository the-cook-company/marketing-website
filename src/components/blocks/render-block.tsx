import { Box, Container } from "@chakra-ui/react";
import { AddressComposer } from "components/address";
import { AssetDownloadComposer } from "components/asset-download";
import { ContactComposer } from "components/contact";
import { FooterComposer } from "components/footer";
import { ImageComposer } from "components/image";
import { NavigationBarComposer } from "components/navigation-bar";
import { PageComposer } from "components/page";
import { RichTextComposer } from "components/rich-text";
import { ReactNode } from "react";

const renderBlock = (block: Contentful.IBlock): ReactNode => {
  let ElementComponent: ReactNode;

  switch (block.fields.element.sys.contentType.sys.id) {
    case "address":
      ElementComponent = (
        <AddressComposer
          element={block.fields.element as Contentful.IAddress}
        />
      );

      break;
    case "assetDownload":
      ElementComponent = (
        <AssetDownloadComposer
          element={block.fields.element as Contentful.IAssetDownload}
        />
      );

      break;
    case "page":
      ElementComponent = (
        <PageComposer element={block.fields.element as Contentful.IPage} />
      );

      break;
    case "image":
      ElementComponent = (
        <ImageComposer element={block.fields.element as Contentful.IImage} />
      );

      break;
    case "footer":
      ElementComponent = (
        <FooterComposer element={block.fields.element as Contentful.IFooter} />
      );

      break;
    case "contact":
      ElementComponent = (
        <ContactComposer
          element={block.fields.element as Contentful.IContact}
        />
      );

      break;
    case "richText":
      ElementComponent = (
        <RichTextComposer
          element={block.fields.element as Contentful.IRichText}
        />
      );

      break;
    case "navigationBar":
      ElementComponent = (
        <NavigationBarComposer
          element={block.fields.element as Contentful.INavigationBar}
        />
      );

      break;
  }

  ElementComponent = (
    <Box
      padding={block.fields.hasPadding ? { base: 2, md: 6 } : 0}
      shadow={block.fields.hasShadow ? "md" : 0}
      marginY={block.fields.hasMargin ? { base: 12, md: 4 } : 0}
    >
      {ElementComponent}{" "}
    </Box>
  );

  if (block.fields.hasConstrainedWidth) {
    ElementComponent = (
      <Container maxWidth="4xl" padding={{ base: 0, md: 4 }}>
        {ElementComponent}
      </Container>
    );
  }

  return ElementComponent;
};

export { renderBlock };
