import { Container, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FunctionComponent, ReactNode } from "react";
import NextLink from "next/link";
import { v4 as uuid } from "uuid";

type FooterProps = {
  logo: ReactNode;
  copyright: string;
  pages: Contentful.IPage[];
};

const Footer: FunctionComponent<FooterProps> = ({ logo, copyright, pages }) => {
  return (
    <Container maxWidth="md">
      <SimpleGrid
        justifyItems="center"
        alignItems="center"
        gap={6}
        columns={{ sm: 1, md: 2 }}
      >
        <Stack>
          {logo}
          <Text color="black.300" fontSize="xs">
            {copyright}
          </Text>
        </Stack>
        <Stack>
          {pages.map((page) => (
            <NextLink key={uuid()} href={`/pages/${page.fields.slug}`}>
              <Link color="red.700">{page.fields.title}</Link>
            </NextLink>
          ))}
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export { Footer };
