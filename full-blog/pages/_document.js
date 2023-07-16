import Document, { Head, Html, Main, NextScript } from 'next/Document';

class MyDocument extends Document {
  render() {
    return <Html lang={'en'}>
      <Head />
      <body>
      <Main />
      <NextScript />
      <div id={"notification"}></div>
      </body>
    </Html>
  }
}

export default MyDocument;