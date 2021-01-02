import { FunctionComponent } from "react";
import { RichText } from "./rich-text";
import { richTextRenderOptions } from "./rich-text-render-options";

type RichTextComposerProps = {
  element: Contentful.IRichText;
};

const RichTextComposer: FunctionComponent<RichTextComposerProps> = ({
  element,
}) => {
  return (
    <RichText
      document={element.fields.richText}
      options={richTextRenderOptions}
    />
  );
};

export { RichTextComposer };
