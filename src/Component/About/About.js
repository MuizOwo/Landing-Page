import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import AboutImg from './AboutImg'
import './About.css'
import grey from '@material-ui/core/colors/grey'


const primary=grey[900]
const theme=grey[50]

function About () {

     const [show, setShow] = useState(false);

          return (
               <div className='about' >
                    <h3>About Us</h3>
                    <h4>WE CAN HELP YOUR BUSINESS GROW</h4>

                    <div className="flex">

                    <div className='About-img' style={{backgroundColor:(primary)}}>
                         <AboutImg />
                    </div>

                    <div className="About-text" style={{backgroundColor:(primary)}}>

                    <h2>EVERYTHING YOU NEED IN ONE SOLUTION</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    <Button className="about-btn" variant="primary" onClick={() => setShow(true)}>
                         Expand
                    </Button>

                    <Modal style={{backgroundColor:(primary)}}
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                    >

                    <Modal.Header closeButton>
                    <Modal.Title className=" madal-title" id="example-custom-modal-styling-title">
                         EVERYTHING YOU NEED IN ONE SOLUTION
                    </Modal.Title>
                    </Modal.Header>

                    <Modal.Body style={{backgroundColor:(primary),color:(theme)}}>
                    <p className='modal-body'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model..
                    </p>
                    </Modal.Body>

                    </Modal>
                    </div>

               </div>
          </div>
          )
     }

export default About
