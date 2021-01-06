import Head from 'next/head'
import { get } from 'lodash'

export default function MetaTags({ meta }) {
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />
      <meta name="author" content="Savi" />

      <meta itemProp="name" content={meta.title} />
      <meta itemProp="description" content={meta.description} />
      <meta itemProp="image" content={meta.image} />

      <meta property="og:title" content={meta.title} />
      <meta
        property="og:url"
        content={get(meta, 'url', 'https://www.bysavi.com/')}
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Savi" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Head>
  )
}
