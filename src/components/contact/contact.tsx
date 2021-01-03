import { Container, Heading, Stack } from "@chakra-ui/react";
import { FunctionComponent, ReactNode } from "react";

type ContactProps = {
  tagline: string;
  contactForm: ReactNode;
};

const Contact: FunctionComponent<ContactProps> = ({ tagline, contactForm }) => {
  return (
    <Container maxWidth="lg">
      <Heading>{tagline}</Heading>
      {contactForm}
    </Container>
  );
};

export { Contact };
