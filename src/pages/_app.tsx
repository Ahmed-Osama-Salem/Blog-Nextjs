import '../styles/global.css';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  main: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

export const theme = extendTheme({ colors });

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </CacheProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
