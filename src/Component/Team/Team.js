import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
import './Team.css'
import grey from '@material-ui/core/colors/grey'


const primary=grey[900]
const theme=grey[500]


export class Team extends Component {
     render() {
          return (
               <div className='team-body' style={{backgroundColor:(primary)}}>
                    <h3>OUR TEAM</h3>
                    <h2>WE HAVE A PROFESSIONAL TEAM OF BUSINESS ANALYSTS.</h2>
                    <div className='teams'>
               <div className='team-1'>
                         <Card style={{ width: ('18rem' ),backgroundColor:(theme)}}>
                              <Card.Img className="team-img" variant="top" src="https://instagram.fkul15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/43778312_356094731618711_2130099858063753216_n.jpg?_nc_ht=instagram.fkul15-1.fna.fbcdn.net&_nc_ohc=O5xqVSVw0H4AX_Mbvih&oh=eb862c7ae7f459f7f2c88af169ed8f54&oe=5EE18A13" />
                              <Card.Body className='card-text'>
                              <Card.Title>Hashim Bey</Card.Title>
                              <Card.Text>
                              this a long established fact that a reader will be distracted by the readable content
                              </Card.Text>
                              <a href='https://www.instagram.com/bello_hashim/' target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram fa-3x"></i></a>
                              <a href='https://twitter.com/hbbello2' target='_blank' rel="noopener noreferrer"><i className="fab fa-twitter fa-3x"></i></a>
                              </Card.Body>
                         </Card>
                    </div>
                    <div className='team-2'>
                         <Card style={{ width:( '18rem'),backgroundColor:(theme) }}>
                              <Card.Img className="team-img" variant="top" src="https://pbs.twimg.com/profile_images/1164325744018722816/9H_4WYjH_400x400.jpg" />
                              <Card.Body className='card-text'>
                              <Card.Title>Muiz Owodunni</Card.Title>
                              <Card.Text>
                              this a long established fact that a reader will be distracted by the readable content
                              </Card.Text>
                              <a href="https://www.instagram.com/boycoder.tech/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-3x"></i></a>
                              <a href="https://twitter.com/BoycoderT" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-3x"></i></a>
                              </Card.Body>
                         </Card>
                    </div>
               </div>
               </div>
          )
     }
}

export default Team
