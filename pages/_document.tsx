import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head></Head>
        <body className='bg-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
