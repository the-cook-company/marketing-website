import {
  Box,
  Center,
  Container,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FunctionComponent, ReactNode } from "react";

type HeroProps = {
  image: ReactNode;
  tagline: string;
};

const Hero: FunctionComponent<HeroProps> = ({ image, tagline }) => {
  const containerHeight = useBreakpointValue({ base: "2xs", md: "md" });
  const headerSpacing = useBreakpointValue({ base: 4, md: 6 });

  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      maxWidth="4xl"
      padding={0}
      height={containerHeight}
    >
      {image}
      <Box
        position="absolute"
        backgroundColor="red.700"
        color="white.50"
        padding={headerSpacing}
        margin={headerSpacing}
      >
        <Heading as="h2" noOfLines={4}>
          {tagline}
        </Heading>
      </Box>
    </Container>
  );
};

export { Hero };
