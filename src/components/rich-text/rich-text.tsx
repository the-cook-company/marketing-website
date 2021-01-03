import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { FunctionComponent } from "react";
import { Document } from "@contentful/rich-text-types";

type RichTextProps = {
  document: Document;
  options: Options;
};

const RichText: FunctionComponent<RichTextProps> = ({ document, options }) => {
  const richTextReactComponents = documentToReactComponents(document, options);

  return <>{richTextReactComponents}</>;
};

export { RichText };
