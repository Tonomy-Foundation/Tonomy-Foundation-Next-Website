import Document, { 
    Html, 
    Head, 
    Main, 
    NextScript 
  } from "next/document";
  
  class MyDocument extends Document {
    render() {
      return (
        <Html lang="zxx">
          <Head>
            <link
              href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800&display=swap"
              rel="stylesheet"
            />
            <link rel="icon" type="image/png" href="/images/favicon.png"></link>
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