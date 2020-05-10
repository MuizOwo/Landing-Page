import React, { Component } from 'react'
//import {Link} from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import './Navbar.css'
import grey from '@material-ui/core/colors/grey'


const primary=grey[600]
export class NavbarTop extends Component {
     render() {
          return (
               <div className="navbar"  style={{backgroundColor:(primary)}} >
                    <Navbar className="navbarBrand-text" >
                    <h2> BoyCoder.Tech</h2>
                    </Navbar>
                    <div className='nav-i' >
                         <a href="https://github.com/MuizOwo" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-2x"></i></a>
                    </div>
               </div>
          )
     }
}

export default NavbarTop
