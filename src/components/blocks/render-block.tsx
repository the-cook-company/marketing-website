import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";
import dynamic from "next/dynamic";

const renderBlock = (block: Contentful.IBlock): ReactNode => {
  let ElementComponent: ReactNode;

  switch (block.fields.element.sys.contentType.sys.id) {
    case "address": {
      const AddressComposer = dynamic(() =>
        import("components/address").then((module) => module.AddressComposer)
      );

      ElementComponent = (
        <AddressComposer
          element={block.fields.element as Contentful.IAddress}
        />
      );

      break;
    }
    case "assetDownload": {
      const AssetDownloadComposer = dynamic(() =>
        import("components/asset-download").then(
          (module) => module.AssetDownloadComposer
        )
      );

      ElementComponent = (
        <AssetDownloadComposer
          element={block.fields.element as Contentful.IAssetDownload}
        />
      );

      break;
    }
    case "page": {
      const PageComposer = dynamic(() =>
        import("components/page").then((module) => module.PageComposer)
      );

      ElementComponent = (
        <PageComposer element={block.fields.element as Contentful.IPage} />
      );

      break;
    }
    case "image": {
      const ImageComposer = dynamic(() =>
        import("components/image").then((module) => module.ImageComposer)
      );

      ElementComponent = (
        <ImageComposer element={block.fields.element as Contentful.IImage} />
      );

      break;
    }
    case "footer": {
      const FooterComposer = dynamic(() =>
        import("components/footer").then((module) => module.FooterComposer)
      );

      ElementComponent = (
        <FooterComposer element={block.fields.element as Contentful.IFooter} />
      );

      break;
    }
    case "contact": {
      const ContactComposer = dynamic(() =>
        import("components/contact").then((module) => module.ContactComposer)
      );

      ElementComponent = (
        <ContactComposer
          element={block.fields.element as Contentful.IContact}
        />
      );

      break;
    }
    case "richText": {
      const RichTextComposer = dynamic(() =>
        import("components/rich-text").then((module) => module.RichTextComposer)
      );

      ElementComponent = (
        <RichTextComposer
          element={block.fields.element as Contentful.IRichText}
        />
      );

      break;
    }
    case "navigationBar": {
      const NavigationBarComposer = dynamic(() =>
        import("components/navigation-bar").then(
          (module) => module.NavigationBarComposer
        )
      );

      ElementComponent = (
        <NavigationBarComposer
          element={block.fields.element as Contentful.INavigationBar}
        />
      );

      break;
    }
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
