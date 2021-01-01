import MetaTags from '../components/metatags.js'
import Navigation from '../components/navigation.js'
import Footer from '../components/footer.js'

export default function Layout({ children, meta }) {
  return (
    <>
      <MetaTags meta={meta} />
      <div className="overlay-freeze"></div>
      <Navigation page={meta.page} />
      {children}
      <Footer />
    </>
  )
}
