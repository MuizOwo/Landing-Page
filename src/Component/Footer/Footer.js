import React, { Component } from 'react'
import grey from '@material-ui/core/colors/grey'
import './Footer.css'


const primary=grey[900]
export class Footer extends Component {
     render() {
          return (
               <div className='footer' style={{backgroundColor:(primary)}}>
                    <div className='container'>
                         <div className='footer-font'>
                         <a href="https://www.instagram.com/boycoder.tech/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-3x"></i></a>
                         <a href="https://twitter.com/BoycoderT" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-3x"></i></a>
                         </div>
                         <div className='footer-text'>
                              <h3>&copy; Boycoder.Tech 2020</h3>
                         </div>
                    </div>
               </div>
          )
     }
}

export default Footer
