import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Image1 from './Image1'
import Image2 from './Image2'
import Image3 from './Image3'
import './Slider.css'



export class Slider extends Component {
     render() {
          return (
               <Carousel>

                    <Carousel.Item>
                    <Image1
                         className="d-block w-100"
                    />
                    <Carousel.Caption className='Caption-text'>
                         <h2 className="Caption-text h2">TRUSTED AND PROFESSIONAL ADVISERS</h2>
                         <h4 className="Caption-text h4">FOR YOUR BUSINESS </h4>
                         <p className="Caption-text p">Showcase your Profile to the world using online CV builder and Get Hired Faster.</p>
                         <Button href='https://www.instagram.com/boycoder.tech/' target='_blannk' variant="danger">Reach Us Out</Button> 
                    </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                    <Image2
                         className="d-block w-100"
                    />
                    <Carousel.Caption className='Caption-text'>
                         <h2 className="Caption-text h2">TRUSTED AND PROFESSIONAL ADVISERS</h2>
                         <h4 className="Caption-text h4">FOR YOUR BUSINESS </h4>
                         <p className="Caption-text p">Showcase your Profile to the world using online CV builder and Get Hired Faster.</p>
                         <Button href='https://www.instagram.com/boycoder.tech/' target='_blannk' variant="danger">Reach Us Out</Button> 
                    </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                    <Image3
                         className="d-block w-100"
                    />
                    <Carousel.Caption className='Caption-text'>
                         <h2 className="Caption-text h2">TRUSTED AND PROFESSIONAL ADVISERS</h2>
                         <h4 className="Caption-text h4">FOR YOUR BUSINESS </h4>
                         <p className="Caption-text p">Showcase your Profile to the world using online CV builder and Get Hired Faster.</p>
                         <Button href='https://www.instagram.com/boycoder.tech/' target='_blannk' variant="danger">Reach Us Out</Button> 
                    </Carousel.Caption>
                    </Carousel.Item>
               </Carousel>
          )
     }
}

export default Slider
