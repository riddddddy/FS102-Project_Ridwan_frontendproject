import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import support1 from './support-1.png'
import support2 from './support-2.png'
import support3 from './support-3.png'
import support4 from './support-4.png'
import call from './contact-call.png'
import email from './contact-email.png'
import { useState } from 'react';

const Contact = () => {

  // const [fullName, setFullName] = useState({
  //   fName:'',
  //   lName:''
  // })

  // const handleChange1=(e)=>{
  //   const name = e.target.value
    
  //   setFullName(prevState =>{
  //     return{
  //       ...prevState, fName: name
  //     }
  //   })

    
  // }

  // const handleChange2=(e)=>{
  //   const name = e.target.value
    
  //   setFullName(prevState =>{
  //     return{
  //       ...prevState, lName: name
  //     }
  //   })

    
  // }

  // const showDisplay = () =>[
  //   console.log(fullName)
  // ]





  return (
    <div className='pb-5'>

      <div className='d-flex justify-content-around align-items-center mb-5 gap-4 pt-4 pb-5 help-bg'>
        <img className='aaa' src={support1} style={{ width: '10%' }} />
        <img src={support2} style={{ width: '10%' }} />
        <img src={support3} style={{ width: '10%' }} />
        <img src={support4} style={{ width: '10%' }} />

      </div>

      <div className='d-flex justify-content-center align-items-center mb-5'>
        <h2 className='text-center'>We look forward to serve you better</h2>
      </div>

      <div className='container'>
        <Form>
          <Row className='gap-3'>
            <Col className='col-lg col-12 '>
              <Form.Control placeholder="First name" />
            </Col>

            <Col className='col-lg col-12 '>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
        </Form>

        <Form.Group as={Col} controlId="formGridEmail" className='mt-3'>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>How can we help you?</Form.Label>
          <Form.Control as="textarea" rows={7} />
        </Form.Group>

        <div className='mt-3 d-flex justify-content-center'>
          <button className='btn btn-primary btn-lg'>Submit</button>
        </div>

        <div className='mt-5'>
          <h2>Contact Us</h2>
          <table>
            <tbody>
              <tr>
                <td><img src={call} alt="call" className='contact-logo' /></td>
                <td> +07895545</td>
              </tr>

              <tr>
                <td><img src={email} alt="email" className='contact-logo' /></td>
                <td>ridwandeveloper@gmail.com</td>
              </tr>
            </tbody>


          </table>
        </div>

      </div>


      {/* <div>
        <input type="text" onChange={handleChange1} placeholder='first name' />
        <input type="text" onChange={handleChange2} placeholder='last name' />
        <button onClick={showDisplay}>submit</button>

      </div> */}
    </div>
  )
}

export default Contact