import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
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
    <Box bg="red.700" padding={6}>
      <Container maxWidth="md">
        <SimpleGrid
          justifyItems="center"
          alignItems="center"
          gap={6}
          columns={{ sm: 1, md: 2 }}
        >
          <Stack textAlign="center">
            {logo}
            <Text color="white.200" fontSize="xs">
              {copyright}
            </Text>
          </Stack>
          <Stack>
            {pages.map((page) => (
              <NextLink key={uuid()} href={`/pages/${page.fields.slug}`}>
                <Link color="white.50">{page.fields.title}</Link>
              </NextLink>
            ))}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export { Footer };
