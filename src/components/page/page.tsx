import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
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
  const imageContainerHeight = useBreakpointValue({
    base: 36,
    md: 44,
    lg: 48,
  });

  return (
    <Box padding={6} shadow="md">
      <Container maxWidth="lg">
        <SimpleGrid gap={6} columns={{ sm: 1, md: 2 }}>
          <Box position="relative" height={imageContainerHeight}>
            {image}
          </Box>
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
    </Box>
  );
};

export { Page };
