import { useState } from 'react'
import Hero from "./components/landing/Hero/Hero";
import Services from "./components/landing/Services/Services.jsx"
import Banner from "./components/landing/Banner/Banner.jsx";
import Footer from './components/landing/Footer/Footer.jsx';


function App() {

  return (
       <main className="overflow-x-hidden bg-white text-dark">
              <Hero />
              <Services/>
              <Banner />
              <Footer/>
       </main>
  )
}

export default App
