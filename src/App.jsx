
import './App.css'
import Banner from './components/Banner'
import BannerBottom from './components/BannerBottom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Started from './components/Started'
import Workflow from './components/Workflow'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <BannerBottom />
      <Started />
      <Pricing />
      <Workflow />
      <Footer/>
    </>
  )
}

export default App
