import { FunctionComponent } from "react";
import { Page } from "./page";
import NextImage from "next/image";

type PageComposerProps = {
  element: Contentful.IPage;
};

const PageComposer: FunctionComponent<PageComposerProps> = ({ element }) => {
  return (
    <Page
      image={
        <NextImage
          src={`https:${element.fields.image.fields.file.url}`}
          layout="fill"
          objectFit="cover"
        />
      }
      title={element.fields.title}
      description={element.fields.description}
      callToAction={element.fields.callToAction}
      path={`/pages/${element.fields.slug}`}
    />
  );
};

export { PageComposer };
