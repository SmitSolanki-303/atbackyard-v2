import './App.css'
import CapabilitiesCarousel from './components/CapabilitiesCarousel'
import InfinityBand from './components/InfinityBand'
import IntroductionPage from './components/IntroductionPage'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <IntroductionPage/>
      <CapabilitiesCarousel/>
      <InfinityBand />
    </>
  )
}

export default App
