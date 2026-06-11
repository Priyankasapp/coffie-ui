// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Menu from './components/Menu';
// import Testimonials from './components/Testimonials';
// import Contact from './components/Contact';
// import "./App.css"
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Hero/>
//         <Menu />
//         <Testimonials/>
//         <Contact/>
//         <Footer/>
//     </div>
//   )
// }

// export default App


import React from 'react'
import {Route, Routes} from'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
