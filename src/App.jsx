import './App.css'
import { ReactLenis } from 'lenis/react'
import { BrowserRouter as Router } from 'react-router-dom' // Add this import for routing
import CapabilitiesCarousel from './components/CapabilitiesCarousel'
import InfinityBand from './components/InfinityBand'
import IntroductionPage from './components/IntroductionPage'
import Navbar from './components/Navbar'
import OurWorkScrollBand from './components/OurWorkScrollBand'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
    <ReactLenis root>
      <Navbar/>
      <IntroductionPage/>
      <CapabilitiesCarousel/>
      <InfinityBand />
      <OurWorkScrollBand />
      <Footer/>
    </ReactLenis>
    </Router>
  )
}

export default App
