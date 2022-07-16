import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import {Container , Row , Col, Form} from 'react-bootstrap'
const MyWorkspaceFilter = () => {
  return (
    <div>
        <NavbarMenu />
        <Sidebar />
    
            <Container style={{marginTop:"10rem"}}>
            <Form>
                <Row>
                 
                    <Col xs={6}>
                        <Form.Label className='fw-bold '>Date -time of locking the JD </Form.Label>
                        <Form.Control type="date"></Form.Control>
                    </Col>
                    <Col xs={6}>
                        <Form.Label className='fw-bold'>Time</Form.Label>
                        <Form.Control type="time"></Form.Control>
                    </Col>
                    </Row>
                    <Row>
                    <Col xs={6}>
                        <Form.Label className='fw-bold mt-5'>Client Name</Form.Label>
                        <Form.Control type="text"></Form.Control>
                    </Col>
                    </Row>
                  </Form>
                
            </Container>
    </div>
  )
}

export default MyWorkspaceFilter