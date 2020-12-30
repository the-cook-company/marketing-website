import {
  Text,
  Button,
  Heading,
  Icon,
  Stack,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { Download, File } from "react-feather";
import { saveAs } from "file-saver";
import prettyBytes from "pretty-bytes";

type AssetDownloadProps = {
  title;
  description;
  fileName;
  fileSize;
  fileUrl;
};

const AssetDownload: FunctionComponent<AssetDownloadProps> = ({
  title,
  description,
  fileName,
  fileSize,
  fileUrl,
}) => {
  const downloadFile = (): void => {
    saveAs(fileUrl);
  };

  return (
    <Center>
      <SimpleGrid
        shadow="md"
        padding={6}
        alignItems="center"
        gap={6}
        columns={{ sm: 1, md: 2 }}
      >
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
              {`${fileName} ${prettyBytes(parseInt(fileSize))}`}
            </Text>
          </Center>
        </Stack>
      </SimpleGrid>
    </Center>
  );
};

export { AssetDownload };
