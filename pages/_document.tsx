import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { getCssText } from '@config/stitches.config';
import { Favicon } from '@components/Favicon';
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Favicon />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
           <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2406141091769247"
     crossOrigin="anonymous"></script>
     <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
