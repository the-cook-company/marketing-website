import { FunctionComponent, ReactNode } from "react";

type BlocksProps = {
  renderBlock: (block: Contentful.IBlock) => ReactNode;
  blocks: Contentful.IBlock[];
};

const Blocks: FunctionComponent<BlocksProps> = ({ renderBlock, blocks }) => {
  return <>{blocks.map((block) => renderBlock(block))}</>;
};

export { Blocks };
