import '@fontsource/ibm-plex-sans';
import '@fontsource/ibm-plex-sans/500.css';
import 'focus-visible';
import '../style.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { NextBannerMeta } from 'next-banner';
import PlausibleProvider from 'next-plausible';

import { applyGlobalStyles } from '@config/stitches.config';
import { defaultSeoProps } from '@config/seo.config';
import { ThemeProvider } from '@components/ThemeProvider';
import { PageLayout } from '@components/Layout';
import { getBaseUrl } from '@utils/getBaseUrl';

type PageProps = {
  renderWithoutLayout?: boolean;
};

function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  applyGlobalStyles();

  if (Component.defaultProps?.renderWithoutLayout)
    return (
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    );

  return (
    <PlausibleProvider domain={getBaseUrl({ omitProtocol: true })}>
      <ThemeProvider>
        <PageLayout>
          <NextBannerMeta>
            <DefaultSeo {...defaultSeoProps} />
            <Component {...pageProps} />
          </NextBannerMeta>
        </PageLayout>
      </ThemeProvider>
    </PlausibleProvider>
  );
}

export default MyApp;
