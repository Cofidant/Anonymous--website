import React from 'react'
import './Login.css'

export default function Login() {
    return (
        <div className='login'>
           {/* Left side*/}
           <div className='login-pic'>

           </div>
           {/* Right side*/}
           <div className='login-main'>
               <Container>
                   <h2 className='shadow-sm text success mt-5 p-3 text-center rounded'>LOGIN</h2>
                   <Row>
                       <Col lg={5} md={6} sm={12}>
                       
                       </Col>
                   </Row>
               </Container>
           </div>
        </div>

    )
}