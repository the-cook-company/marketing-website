import { Box, Container, Heading, useBreakpointValue } from "@chakra-ui/react";
import { FunctionComponent, ReactNode } from "react";

type ImageProps = {
  image: ReactNode;
  tagline?: string;
};

const Image: FunctionComponent<ImageProps> = ({ image, tagline }) => {
  const containerHeight = useBreakpointValue({
    base: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
  });
  const headerSpacing = useBreakpointValue({ base: 4, md: 6 });

  return (
    <Box
      display="grid"
      alignItems="center"
      justifyItems="center"
      position="relative"
      height={containerHeight}
    >
      {image}
      {tagline !== undefined ? (
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
      ) : null}
    </Box>
  );
};

export { Image };
