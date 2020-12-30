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
  const containerHeight = useBreakpointValue({
    base: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
  });
  const headerSpacing = useBreakpointValue({ base: 4, md: 6 });

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      height={containerHeight}
    >
      {image}
      <Container position="absolute" padding={headerSpacing}>
        <Heading
          as="h2"
          textShadow="0 0 5px grey"
          color="white.50"
          noOfLines={4}
        >
          {tagline}
        </Heading>
      </Container>
    </Box>
  );
};

export { Hero };
