import { FunctionComponent } from "react";
import { IBlock } from "../../../@types/generated/contentful";
import { Blocks } from "./blocks";
import { renderBlock } from "./render-block";

type BlocksComposerProps = {
  blocks: IBlock[];
};

const BlocksComposer: FunctionComponent<BlocksComposerProps> = ({ blocks }) => {
  return <Blocks renderBlock={renderBlock} blocks={blocks} />;
};

export { BlocksComposer };
