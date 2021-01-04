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
        </body>
      </Html>
    )
  }
}

export default MyDocument
