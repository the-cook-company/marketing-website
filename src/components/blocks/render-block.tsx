import { Container } from "@chakra-ui/react";
import { AssetDownloadComposer } from "components/asset-download";
import { HeroComposer } from "components/hero";
import { NavigationBarComposer } from "components/navigation-bar";
import { ReactNode } from "react";
import { v4 as uuid } from "uuid";

const renderBlock = (block: Contentful.IBlock): ReactNode => {
  let ElementComponent: ReactNode;

  switch (block.fields.element.sys.contentType.sys.id) {
    case "address":
      ElementComponent = <p>Address</p>;
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
      break;
    case "hero":
      ElementComponent = (
        <HeroComposer
          key={uuid()}
          element={block.fields.element as Contentful.IHero}
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
      ElementComponent = <p>Rich Text</p>;
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

  return block.fields.constrainWidth ? (
    <Container maxWidth="4xl">{ElementComponent}</Container>
  ) : (
    ElementComponent
  );
};

export { renderBlock };
