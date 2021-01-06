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
  useToast,
} from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import { Send } from "react-feather";
import { v4 as uuid } from "uuid";

const ContactForm: FunctionComponent = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async () => {
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "post",
      body: JSON.stringify({ name, email, message }),
    });

    switch (res.status) {
      case 200:
        toast({ id: uuid(), title: "Message Sent!", status: "success" });
        break;
      case 400:
        toast({ id: uuid(), title: "Error Sending Message", status: "error" });
        break;
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitForm();
      }}
    >
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
            type="submit"
            colorScheme="blue"
            color="white.50"
            rightIcon={<Icon as={Send} />}
            disabled={!name || !email || !message}
            isLoading={loading}
          >
            Send
          </Button>
        </Flex>
      </Stack>
    </form>
  );
};

export { ContactForm };
