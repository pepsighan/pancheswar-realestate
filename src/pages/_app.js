import { CssBaseline, ThemeProvider } from '@material-ui/core';
import Head from 'next/head';
import theme from '../theme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <CssBaseline />
    </ThemeProvider>
  );
}
