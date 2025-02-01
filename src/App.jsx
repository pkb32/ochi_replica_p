import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
import Cards from './components/Cards'
import Footer from './components/Footer'

//for smooth scroll
import LocomotiveScroll from 'locomotive-scroll';
function App() {
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className='w-full min-h-screen text-white bg-zinc-900'>
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Features />
        <Cards />
        <Footer />
      </div>
    </>
  )
}

export default App
