import { ColorModeScript } from '@chakra-ui/react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import { AppConfig } from '@/apps/utils/AppConfig';

import { theme } from './_app';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
