import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import { Send } from "react-feather";

const ContactForm: FunctionComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Stack spacing={6}>
      <FormControl isRequired maxWidth="xs" id="name">
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired maxWidth="xs" id="email">
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormHelperText>We will never share your email.</FormHelperText>
      </FormControl>
      <FormControl isRequired id="message">
        <FormLabel>Message</FormLabel>
        <Textarea
          resize="vertical"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </FormControl>
      <Flex justifyContent="right">
        <Button
          colorScheme="blue"
          color="white.50"
          rightIcon={<Icon as={Send} />}
          disabled={!name || !email || !message}
        >
          Send
        </Button>
      </Flex>
    </Stack>
  );
};

export { ContactForm };
