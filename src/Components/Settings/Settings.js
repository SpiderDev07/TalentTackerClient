import React from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { Container, Row, Col, Card, Tabs, Tab, Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Settings = () => {
  return (
    <div>
        <Sidebar />
        <NavbarMenu />
        <Container className='myprofile'>
            <Row>
                <Col sm={3}>
                    <div className='sidebar'>
                        <Card>
                            <Card.Body>
                                <ul className='sidebarMenuItem'>
                                    {/* <li ><i className="fas fa-user me-2" /><Link to="/MyProfile" >My Profile</Link></li> */}
                                    <li ><i className="fas fa-user me-2"></i><Link to="/Admin-Assigned-Information" >My Profile</Link></li>
                                    <li className='active'><i className="fas fa-cog me-2"></i> <Link to="/Settings" className='active-link'>Settings</Link></li>
                                    <li><i className="fas fa-lock me-2" /><Link to="/ChangePassword">Change Password</Link></li>
                                    <li><i className="fas fa-sign-out-alt me-2"></i><Link to="/Unsubscribe">Unsubscribe</Link></li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col sm={9}>
                <div className='right-side'>
                <Card>
                    <Card.Body>
                    <Card.Title className='mb-4'>Settings</Card.Title>
                    <Tabs defaultActiveKey="Notify Me" id="uncontrolled-tab-example" className=" shadow">
                <Tab eventKey="Notify Me" title="Notify Me">
                   
                       <h5 className='mt-2'>Notification Settings</h5>
                       <Form>
                       <Form.Group  controlId="exampleForm.ControlTextarea1">
                            <Form.Label><small>Email addresses</small></Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter Email Addresses Seperated by comma" />
                        </Form.Group>
                        <small><p className='text-muted mb-0 mt-0' style={{fontSize:'0.75rem'}}>Notifications will be sent to these email addresses.</p></small>
                        <Form.Group  controlId="exampleForm.ControlTextarea1">
                            <Form.Label><small>Administrator Email addresses</small></Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter Email Addresses Seperated by comma" />
                        </Form.Group>
                     <p className='text-muted mb-0 mt-0' style={{fontSize:'0.75rem'}}>Weekly Statistic of your account will be sent to these email addresses.</p>
                        <Button variant='primary'>save</Button>
                       </Form>
                   
                </Tab>
                
                </Tabs>
                    </Card.Body>
                </Card>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Settings