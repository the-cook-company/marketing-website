import { FunctionComponent } from "react";
import { Image } from "./image";
import NextImage from "next/image";

type ImageComposerProps = {
  element: Contentful.IImage;
};

const ImageComposer: FunctionComponent<ImageComposerProps> = ({ element }) => {
  return (
    <Image
      image={
        <NextImage
          src={`https:${element.fields.image.fields.file.url}`}
          alt={element.fields.image.fields.description}
          layout="fill"
          objectFit="cover"
        />
      }
      tagline={element.fields.tagline}
    />
  );
};

export { ImageComposer };
