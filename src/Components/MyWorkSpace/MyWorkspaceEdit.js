import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
const MyWorkspaceEdit = () => {
  return (
    <div>
        <NavbarMenu />
        <Sidebar />
            <Container style={{marginTop:"10rem"}}>
                <Card>
                    <Card.Body>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Form.Label>Status as per Recruiter</Form.Label>
                                    <Form.Control />
                                </Col>
                                <Col md={6}>
                                    <Form.Label>Number of submissions</Form.Label>
                                    <Form.Control />
                                </Col>
                                <Col md={6}>
                                    <Form.Label>Feedback from client </Form.Label>
                                    <Form.Control />
                                </Col>
                                <Col md={6}>
                                    <Form.Label>Exchange notes with admin</Form.Label>
                                    <Form.Control />
                                </Col>
                            </Row>
                            <Button className='mt-3'><i className="fas fa-save me-2" />Save Changes</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
    </div>
  )
}

export default MyWorkspaceEdit