import React from 'react';
import { Html, Document, Head, Main, NextScript } from 'utils/next';
import { ServerStyleSheet } from 'utils/styling';

const supportedLocale = ['fr', 'it'];

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    const queryLocale = ctx.query.locale;
    const locale = supportedLocale.find(l => l === queryLocale) ? queryLocale : 'fr';

    const linguiCatalog = await import(`raw-loader!../locale/${locale}/messages.js`).then(mod => mod.default);

    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps, ...page, styleTags, linguiCatalog, locale };
  }

  render() {
    const { linguiCatalog, locale } = this.props;
    return (
      <Html lang={locale}>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link
            href="https://fonts.googleapis.com/css?family=Lobster|Open+Sans:400,700,400italic,700italic|Montserrat:400,700|Roboto:300,400,500,700"
            rel="stylesheet"
          />
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
          <link href="/static/fonts/stylesheet.css" rel="stylesheet" />
          <meta name="google-site-verification" content="myJ_CwUBXOaGJlyttvQKhJtgoiJgNXjOV0HA_pPxRBQ" />
          <meta httpEquiv="Content-Language" content={locale} />
          <script async defer src="https://analytics.umami.is/script.js" data-website-id="d0ba98f1-4d2c-4c39-a5b6-6f3c1abe76b3"></script>
          <script dangerouslySetInnerHTML={{ __html: linguiCatalog }} />
          {this.props.styleTags}
        </Head>
        <body style={{ margin: 0, padding: 0 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
