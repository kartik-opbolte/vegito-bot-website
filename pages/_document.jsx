import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/logo.jpg" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="Vegito is a Premium Discord music bot with many awsome features and 247 music support note: we are giving free premium membership of vegito till any announcement"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@VegitoDiscordBot" />
          <meta name="twitter:creator" content="@VegitoDiscordBot" />
          <meta property="og:url" content="https://www.vegito.ml" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Vegito" />
          <link
            rel="icon"
            href="/img/logo2.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="Vegito is a Premium Discord music bot with many awsome features and 247 music support "
          />
          <meta property="og:image" content="/img/logo.jpg" />
          <meta property="og:image:alt" content="Vegito" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="Vegito"
          />
          <meta name="theme-color" content="#6108dd" />
          <link rel="icon" href="/img/logo.jpg" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
