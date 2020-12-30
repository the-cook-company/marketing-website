import { Composer as NavigationBarComposer } from "components/navigation-bar";
import { ReactNode } from "react";
import { v4 as uuid } from "uuid";

const renderBlock: (block: Contentful.IBlock) => ReactNode = (block) => {
  let ElementComponent: ReactNode;

  switch (block.fields.element.sys.contentType.sys.id) {
    case "address":
      ElementComponent = <p>Address</p>;
      break;
    case "assetDownload":
      ElementComponent = <p>Asset Download</p>;
      break;
    case "page":
      break;
    case "hero":
      ElementComponent = <p>Hero</p>;
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

  return ElementComponent;
};

export { renderBlock };
