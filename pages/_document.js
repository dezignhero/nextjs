import Document, { Html, Head, Main, NextScript } from 'next/document'
import { get } from 'lodash'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const slug = get(ctx.asPath.split('/'), '1', false)
    return slug
      ? {
          bodyId: 'body-' + slug,
          ...initialProps,
        }
      : initialProps
  }

  render() {
    return (
      <Html>
        <Head />
        <body id={this.props.bodyId}>
          <Main />
          <NextScript />
          <script src="/js/vendor/zepto.min.js"></script>
          <script src="/js/vendor/picturefill.min.js"></script>
          <script src="/js/vendor/basicscroll.min.js"></script>
          <script src="/js/fader.js"></script>
          <script src="/js/navigation.js"></script>
          <script src="/js/global.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
