import {
  Text,
  Button,
  Heading,
  Icon,
  Stack,
  Center,
  SimpleGrid,
  Container,
  Box,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { Download } from "react-feather";
import prettyBytes from "pretty-bytes";
import jsFileDownloader from "js-file-downloader";

type AssetDownloadProps = {
  title: string;
  description: string;
  fileName: string;
  fileSize: number;
  fileUrl: string;
};

const AssetDownload: FunctionComponent<AssetDownloadProps> = ({
  title,
  description,
  fileName,
  fileSize,
  fileUrl,
}) => {
  const downloadFile = async (): Promise<void> => {
    const download = new jsFileDownloader({ url: fileUrl, autoStart: false });
    await download.start();
  };

  return (
    <Box padding={6} shadow="md">
      <Container maxWidth="lg">
        <SimpleGrid alignItems="center" gap={6} columns={{ sm: 1, md: 2 }}>
          <Stack>
            <Heading as="h2" fontSize="3xl">
              {title}
            </Heading>
            <Text>{description}</Text>
          </Stack>
          <Stack>
            <Button
              variant="solid"
              colorScheme="blue"
              color="white.50"
              onClick={() => downloadFile()}
              leftIcon={<Icon as={Download} />}
            >
              Download
            </Button>
            <Center>
              <Text fontSize="xs" color="black.500">
                {`${fileName} ${prettyBytes(fileSize)}`}
              </Text>
            </Center>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export { AssetDownload };
