import { FunctionComponent, ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import { v4 as uuid } from "uuid";

type BlocksProps = {
  renderBlock: (block: Contentful.IBlock) => ReactNode;
  blocks: Contentful.IBlock[];
};

const Blocks: FunctionComponent<BlocksProps> = ({ renderBlock, blocks }) => {
  return (
    <>
      {blocks.map((block) => (
        <Box key={uuid()}>{renderBlock(block)}</Box>
      ))}
    </>
  );
};

export { Blocks };
