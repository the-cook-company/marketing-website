import {
  AspectRatio,
  Button,
  Container,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FunctionComponent, ReactElement } from "react";
import { ArrowRight } from "react-feather";

type PageProps = {
  image: ReactElement;
  title: string;
  description: string;
  callToAction: string;
  path: string;
};

const Page: FunctionComponent<PageProps> = ({
  image,
  title,
  description,
  callToAction,
  path,
}) => {
  return (
    <Container maxWidth="lg">
      <SimpleGrid gap={6} columns={{ sm: 1, md: 2 }}>
        <AspectRatio ratio={4 / 3}>{image}</AspectRatio>
        <Stack>
          <Heading>{title}</Heading>
          <Text noOfLines={3}>{description}</Text>
          <Spacer />
          <NextLink href={path}>
            <Button
              as={Link}
              variant="solid"
              colorScheme="blue"
              color="white.50"
              rightIcon={<Icon as={ArrowRight} />}
            >
              {callToAction}
            </Button>
          </NextLink>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export { Page };
