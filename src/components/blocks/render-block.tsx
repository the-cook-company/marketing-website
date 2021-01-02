import { Box, Container } from "@chakra-ui/react";
import { AddressComposer } from "components/address";
import { AssetDownloadComposer } from "components/asset-download";
import { ImageComposer } from "components/image";
import { NavigationBarComposer } from "components/navigation-bar";
import { PageComposer } from "components/page";
import { RichTextComposer } from "components/rich-text";
import { ReactNode } from "react";
import { v4 as uuid } from "uuid";

const renderBlock = (block: Contentful.IBlock): ReactNode => {
  let ElementComponent: ReactNode;

  switch (block.fields.element.sys.contentType.sys.id) {
    case "address":
      ElementComponent = (
        <AddressComposer
          key={uuid()}
          element={block.fields.element as Contentful.IAddress}
        />
      );
      break;
    case "assetDownload":
      ElementComponent = (
        <AssetDownloadComposer
          key={uuid()}
          element={block.fields.element as Contentful.IAssetDownload}
        />
      );
      break;
    case "page":
      ElementComponent = (
        <PageComposer
          key={uuid()}
          element={block.fields.element as Contentful.IPage}
        />
      );
      break;
    case "image":
      ElementComponent = (
        <ImageComposer
          key={uuid()}
          element={block.fields.element as Contentful.IImage}
        />
      );
      break;
    case "footer":
      ElementComponent = <p>Footer</p>;
      break;
    case "contact":
      ElementComponent = <p>Contact</p>;
      break;
    case "richText":
      ElementComponent = (
        <RichTextComposer
          key={uuid()}
          element={block.fields.element as Contentful.IRichText}
        />
      );
      break;
    case "navigationBar":
      ElementComponent = (
        <NavigationBarComposer
          key={uuid()}
          element={block.fields.element as Contentful.INavigationBar}
        />
      );
      break;
  }

  if (block.fields.constrainWidth) {
    ElementComponent = <Container maxWidth="4xl">{ElementComponent}</Container>;
  }

  if (block.fields.hasSpacing) {
    ElementComponent = <Box marginY={6}>{ElementComponent}</Box>;
  }

  return ElementComponent;
};

export { renderBlock };
