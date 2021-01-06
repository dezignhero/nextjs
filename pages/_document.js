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
          <script src="/js/vendor/zepto.min.js" crossorigin="anonymous"></script>
          <script src="/js/vendor/picturefill.min.js" crossorigin="anonymous"></script>
          <script src="/js/vendor/basicscroll.min.js" crossorigin="anonymous"></script>
          <script src="/js/fader.js" crossorigin="anonymous"></script>
          <script src="/js/navigation.js" crossorigin="anonymous"></script>
          <script src="/js/global.js" crossorigin="anonymous"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
