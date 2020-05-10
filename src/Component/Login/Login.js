import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
import {ListGroup} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {InputGroup} from 'react-bootstrap'
import { Textarea } from "@chakra-ui/core";
import { Box } from "@chakra-ui/core";
import grey from '@material-ui/core/colors/grey'
import './Login.css'


const primary=grey[900]
const color=grey[500]
export class Login extends Component {

     render() {
          return (
               <div className='login'>
                    <h3>Contact Us </h3>
                    <div className='map'>
                         <Box className='map-box'
                         as="iframe"
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.3994960092477!2d101.73248081430995!3d3.2504766976335002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc38c2f70795af%3A0xf808897bf1163a3!2sInternational%20Islamic%20University%20Malaysia!5e0!3m2!1sen!2smy!4v1589092681993!5m2!1sen!2smy" 
                         alt="demo"
                         />
                    </div>
                    <div className='container flex-login'>
                         <div className='contact'>
                         <Card>
                              <Card.Header className='card-header' style={{backgroundColor:(primary),color:(color), width: ('18rem' )}}>Contact Information</Card.Header>
                              <ListGroup variant="flush">
                              <ListGroup.Item><i className="fas fa-phone-alt"></i>  018-386-7619</ListGroup.Item>
                              <ListGroup.Item><i className="fab fa-whatsapp"></i>  018-386-7619</ListGroup.Item>
                              <ListGroup.Item><i className="far fa-envelope"></i>  muizowo@gmail.com</ListGroup.Item>
                              </ListGroup>
                              </Card>
                         </div>
                         
                         <div className='container quote'>
                                   <h4>How can we help ?</h4>
                              <div className='quote1'>
                              <Form className='form'>
                                   <Form.Group controlId="formBasicEmail">
                                   <Form.Label>Name</Form.Label>
                                   <Form.Control type="text" placeholder="Enter Name" />
                                   </Form.Group>

                                   <Form.Group controlId="formBasicEmail">
                                   <Form.Label>Email address</Form.Label>
                                   <Form.Control type="email" placeholder="Enter email" />
                                   </Form.Group>

                                   <Form.Group controlId="formBasicPassword">
                                   <Form.Label>Phone</Form.Label>
                                   <Form.Control type="text" placeholder="Phone" />
                                   </Form.Group>
                                   </Form>
                              </div>
                              <div className='quote2'>
                              <InputGroup className='input-group'>
                                   <Textarea  />
                              </InputGroup>
                              <Button variant="outline-primary">Send Message</Button>
                              </div>
                         </div>
                    </div>
               </div>
          )
     }
}

export default Login
