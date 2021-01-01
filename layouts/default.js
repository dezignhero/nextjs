import Navigation from '../components/navigation.js'
import Footer from '../components/footer.js'

export default function Layout({ children }) {
  return (
    <>
      <div className="overlay-freeze"></div>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
