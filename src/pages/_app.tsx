import { Box, ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { FunctionComponent } from "react";
import { theme } from "styles/theme";

const CustomApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <Box minHeight="100vh" bg="white.50">
        <Component {...pageProps} />
      </Box>
      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Hind:wght@700&family=Roboto+Slab&display=swap");
        `}
      </style>
    </ChakraProvider>
  );
};

export default CustomApp;
