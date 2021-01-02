import { FunctionComponent, ReactNode } from "react";
import { format as formatPhoneNumber } from "phone-fns";
import {
  AspectRatio,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Link,
  Text,
  ButtonGroup,
  Button,
  Icon,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { Mail, Phone } from "react-feather";

type AddressProps = {
  name: string;
  email: string;
  phone: string;
  mailing: string;
  physical: ReactNode;
};

const Address: FunctionComponent<AddressProps> = ({
  name,
  email,
  phone,
  mailing,
  physical,
}) => {
  return (
    <Box padding={6} shadow="md">
      <Container maxWidth="lg">
        <SimpleGrid gap={6} columns={{ sm: 1, md: 2 }}>
          <AspectRatio ratio={4 / 3}>{physical}</AspectRatio>
          <Stack>
            <Heading>{name}</Heading>
            <Text>{mailing}</Text>
            <Spacer />
            <ButtonGroup colorScheme="blue" color="white.50" variant="solid">
              <Stack>
                <Button
                  as={Link}
                  href={`mailto:${email}`}
                  leftIcon={<Icon as={Mail} />}
                >
                  Email
                </Button>
                <Text color="black.500" fontSize="xs">
                  {email}
                </Text>
              </Stack>
              <Stack>
                <Button
                  as={Link}
                  href={`tel:${phone}`}
                  leftIcon={<Icon as={Phone} />}
                >
                  Call
                </Button>
                <Text color="black.500" fontSize="xs">
                  {formatPhoneNumber("(NNN) NNN-NNNN", phone)}
                </Text>
              </Stack>
            </ButtonGroup>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export { Address };
