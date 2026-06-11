import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import "../App.css"
const Home = () => {
  return (
    <div>
     
       <Navbar/>
       <Hero/>
         <Menu />
         <Testimonials/>
         <Contact/>
         <Footer/>
   
    </div>
  )
}

export default Home