import React from 'react';
//import {BrowserRouter as Router, Route} from 'react-router-dom'
import Slider from './Component/Slider/Slider'
import NavbarTop from './Component/Navbar/Navbar'
import About from './Component/About/About'
import Service from './Component/Serviice/Service'
import Login from './Component/Login/Login'
import Footer from './Component/Footer/Footer'
import Team from './Component/Team/Team'
import Design from './Component/Design/Design'
import grey from '@material-ui/core/colors/grey'



const primary=grey[500]

function App() {
  return (
      <div style={{backgroundColor:(primary)}}>
        <NavbarTop />
        <Slider />
        <About />
        <Service />
        <Login />
        <Team />
        <Design />
        <Footer />
      </div>

  );
}

export default App;
