import React, { Component } from 'react'
import './Design.css'
export class Design extends Component {
     render() {
          return (
               <div className='design'>
                    <h2>PORTFOLIO</h2>
                    <h2>CHOOSE A PROFESSIONAL DESIGN</h2>
                    <h2>Websites</h2>
                    <div className='design-images'>
                         <div className='design-1'>
                              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
                         </div>
                         <div className='design-2'>
                              <img src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />      
                         </div>
                         <div className='design-3'>
                              <img src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80" />
                         </div>
                         <div className='design-4'>
                              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
                         </div>
                    </div>
                    <div className='design-text'>
                         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their</p>
                    </div>
               </div>
          )
     }
}

export default Design
