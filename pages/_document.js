import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: App => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: Component => Component
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render () {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <meta name='description' content='' />
          <meta name='author' content='' />
          <link rel='icon' type='image/png' href='img/logo.png' />
          <title>Chow Ordering App</title>
          <link
            href='vendor/fontawesome-free/css/all.min.css'
            rel='stylesheet'
            type='text/css'
          />
          <link href='css/osahan.css' rel='stylesheet' />
          <link href='font/stylesheet.css' rel='stylesheet' />
          <link
            href='vendor/mdi-icons/css/materialdesignicons.min.css'
            rel='stylesheet'
          />
          <link href='css/custom.css' rel='stylesheet' />
        </Head>
        <body id='page-top'>
          <Main />          
          <NextScript />
          <script src='vendor/jquery/jquery.min.js'></script>
          <script src='vendor/bootstrap/js/bootstrap.bundle.min.js'></script>
          <script src='vendor/jquery-easing/jquery.easing.min.js'></script>
          <script src='js/osahan.min.js'></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
