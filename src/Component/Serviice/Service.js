import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Divider } from "@chakra-ui/core";
import './Service.css'
import grey from '@material-ui/core/colors/grey'


const primary=grey[900]
const theme=grey[500]
export class Service extends Component {
     render() {
          return (
               <div className='service'>
                    <h2>Service</h2>
                    <h4>HOW TO PROVIDE TOOLS THAT HELP ANYONE GIVE A VOICE TO THEIR IDEAS </h4>
               <div className='flex-service'>
                    <div className='card-1'>
                         <Card style={{backgroundColor:(primary) }}>
                         <Card.Body>
                         <Card.Title><i className="fas fa-dharmachakra fa-5x"></i></Card.Title>
                         <Card.Subtitle className="mb-2 text-muted">DIGITAL MARKETING</Card.Subtitle>
                         <Divider />
                         <Card.Text>
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                         </Card.Text>
                         </Card.Body>
                         </Card>
                    </div>

                    <div className='card-2'>
                         <Card style={{backgroundColor:(theme)}}>
                         <Card.Body>
                         <Card.Title><i className="fab fa-digital-ocean fa-5x"></i></Card.Title>
                         <Card.Subtitle className="mb-2 text-muted">DIGITAL MARKETING</Card.Subtitle>
                         <Divider />
                         <Card.Text>
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                         </Card.Text>
                         </Card.Body>
                         </Card>
                    </div>

                         <div className='card-3'>
                         <Card style={{backgroundColor:(primary) }}>
                         <Card.Body>
                         <Card.Title><i className="fab fa-draft2digital fa-5x"></i></Card.Title>
                         <Card.Subtitle className="mb-2 text-muted">DIGITAL MARKETING</Card.Subtitle>
                         <Divider />
                         <Card.Text>
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                         </Card.Text>
                         </Card.Body>
                         </Card>
                    </div>

               </div>
               </div>
          )
     }
}

export default Service
