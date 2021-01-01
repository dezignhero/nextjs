import Navigation from '../components/navigation.js'
import Footer from '../components/footer.js'

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
        <div className="page">
        {children}
        </div>
      <Footer />
    </>
  )
}
