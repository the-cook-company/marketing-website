import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";
import NextLink from "next/link";
import {
  Code,
  Divider,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  Link,
  Icon,
} from "@chakra-ui/react";
import { ExternalLink } from "react-feather";

const richTextRenderOptions: Options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (_node, children) => (
      <Heading fontSize="5xl" as="h1">
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_2]: (_node, children) => (
      <Heading fontSize="4xl" as="h2">
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_3]: (_node, children) => (
      <Heading fontSize="3xl" as="h3">
        {children}
      </Heading>
    ),

    [BLOCKS.HEADING_4]: (_node, children) => (
      <Heading fontSize="2xl" as="h4">
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_5]: (_node, children) => (
      <Heading fontSize="xl" as="h5">
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_6]: (_node, children) => (
      <Heading fontSize="lg" as="h6">
        {children}
      </Heading>
    ),
    [BLOCKS.HR]: () => <Divider />,
    [BLOCKS.QUOTE]: (_node, children) => (
      <Text paddingLeft={6}>
        <i>{children}</i>
      </Text>
    ),
    [BLOCKS.OL_LIST]: (_node, children) => (
      <OrderedList>{children}</OrderedList>
    ),
    [BLOCKS.UL_LIST]: (_node, children) => (
      <UnorderedList>{children}</UnorderedList>
    ),
    [BLOCKS.LIST_ITEM]: (_node, children) => <ListItem>{children}</ListItem>,
    [BLOCKS.PARAGRAPH]: (_node, children) => (
      <>
        <Text>{children}</Text>
        <br />
      </>
    ),
    [BLOCKS.EMBEDDED_ENTRY]: () => {
      throw new Error(`Disabled node: ${BLOCKS.EMBEDDED_ENTRY} `);
    },
    [BLOCKS.EMBEDDED_ASSET]: () => {
      throw new Error(`Disabled node: ${BLOCKS.EMBEDDED_ASSET}`);
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <Link href={node.data.uri} color="red.700" isExternal>
        {children}
        <Icon as={ExternalLink} marginLeft={1} />
      </Link>
    ),
    [INLINES.ENTRY_HYPERLINK]: (node, children) => {
      const page = node.data.target as Contentful.IPage;

      return (
        <NextLink href={`/pages/${page.fields.slug}`} passHref>
          <Link color="red.700">{children}</Link>
        </NextLink>
      );
    },
    [INLINES.ASSET_HYPERLINK]: () => {
      throw new Error(`Disabled node: ${INLINES.ASSET_HYPERLINK}`);
    },
    [INLINES.EMBEDDED_ENTRY]: () => {
      throw new Error(`Disabled node: ${INLINES.EMBEDDED_ENTRY}`);
    },
  },
  renderMark: {
    [MARKS.CODE]: (text) => <Code>{text}</Code>,
    [MARKS.BOLD]: (text) => <Text as="b">{text}</Text>,
    [MARKS.ITALIC]: (text) => <Text as="i">{text}</Text>,
    [MARKS.UNDERLINE]: (text) => <Text as="u">{text}</Text>,
  },
  renderText: (text) => text,
};

export { richTextRenderOptions };
