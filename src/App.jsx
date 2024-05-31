import { useState } from 'react'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import About from './components/About'
import Attributes from './components/Attributes'
import Internship from './components/Internship'
import Studentreview from './components/Studentreview'
import Support from './components/Support'



function App() {




  return (
    <>

      <HeroSection />
      {/* <Outlet> */}

      <About/>
      <Attributes/>
      <Internship/>
      <Studentreview/>
      <Support/>
      {/* </Outlet> */}
      <Footer />



    </>
  )
}

export default App
