import { Box, ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { FunctionComponent } from "react";
import { fontFaces } from "styles/font-faces";
import { theme } from "styles/theme";

const CustomApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <Global styles={fontFaces} />
      <Box minHeight="100vh" bg="white.50">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
};

export default CustomApp;
