import React from 'react';
import Document, { Main, NextScript, Head } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import {stockMuiTheme as theme} from "../bootstrap/material-ui-theme";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="pl">
        <Head>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta name="application-name" content={process.env.APP_TITLE}/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap&subset=latin-ext" />
          <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/meta/apple-touch-icons/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/meta/apple-touch-icons/apple-touch-icon-114x114.png" />
          <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/meta/apple-touch-icons/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/meta/apple-touch-icons/apple-touch-icon-144x144.png" />
          <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/meta/apple-touch-icons/apple-touch-icon-60x60.png" />
          <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/meta/apple-touch-icons/apple-touch-icon-120x120.png" />
          <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/meta/apple-touch-icons/apple-touch-icon-76x76.png" />
          <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/meta/apple-touch-icons/apple-touch-icon-152x152.png" />
          <link rel="icon" type="image/png" href="/meta/favicons/favicon-196x196.png" sizes="196x196" />
          <link rel="icon" type="image/png" href="/meta/favicons/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/png" href="/meta/favicons/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/meta/favicons/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="/meta/favicons/favicon-128.png" sizes="128x128" />
          <meta name="msapplication-config" content="/static/browserconfig.xml" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
  );
  }
  }

  MyDocument.getInitialProps = async ctx => {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
    originalRenderPage({
    enhanceApp: App => props => sheets.collect(<App {...props} />),
  });

    const initialProps = await Document.getInitialProps(ctx);

    return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
  };