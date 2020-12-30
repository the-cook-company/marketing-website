import { FunctionComponent } from "react";
import { Hero } from "./hero";
import NextImage from "next/image";

type HeroComposerProps = {
  element: Contentful.IHero;
};

const HeroComposer: FunctionComponent<HeroComposerProps> = ({ element }) => {
  return (
    <Hero
      image={
        <NextImage
          src={`https:${element.fields.image.fields.file.url}`}
          layout="fill"
          objectFit="cover"
        />
      }
      tagline={element.fields.tagline}
    />
  );
};

export { HeroComposer };
