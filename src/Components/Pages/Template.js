import React,{useState} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container , Card, Button, Dropdown, Table, OverlayTrigger, Tooltip, Modal, Form, Row, Col} from 'react-bootstrap'
import './style.css'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
const Template = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const Template = [
        {creator:"admin",TemplateName:"Test", Editor:"Rich",subject:"test email", from:"pk@gmail.com" , to:"rk@gmail.com",cc:"N/a", updated:"26-0502022 12:00 A.M"},
        {creator:"admin",TemplateName:"Test1", Editor:"Rich",subject:"test email1", from:"mk@gmail.com" , to:"tm@gmail.com",cc:"N/a", updated:"26-0502022 01:00 A.M"},
        {creator:"user",TemplateName:"Test2", Editor:"Rich",subject:"test email2", from:"nk@gmail.com" , to:"ap@gmail.com",cc:"N/a", updated:"26-0502022 02:00 A.M"},
        {creator:"user",TemplateName:"Test3", Editor:"Rich",subject:"test email3", from:"gk@gmail.com" , to:"gp@gmail.com",cc:"N/a", updated:"26-0502022 03:00 A.M"},
        {creator:"user",TemplateName:"Test4", Editor:"Rich",subject:"test email4", from:"ok@gmail.com" , to:"ql@gmail.com",cc:"N/a", updated:"26-0502022 04:00 A.M"},
        {creator:"admin",TemplateName:"Test5", Editor:"Rich",subject:"test email5", from:"sk@gmail.com" , to:"dr@gmail.com",cc:"N/a", updated:"26-0502022 05:00 A.M"}
    ]
  return (
    <div>
    
        <NavbarMenu />
        <Sidebar />
        <ToastContainer position='top-center' />
        <Container className='template'>
        <div className='temp-card'>
                <Card>
                    <Card.Body>
                    <div className="cardTitle mb-4 d-flex justify-content-between align-items-center"><h5>Templates</h5>
                    <div className='d-flex'>
                    <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic" size='sm'>
                       Add Templates
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/submit">Use Rich text editor</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    <Button className='mx-2' size='sm' onClick={handleShow}>Attach tracker sheet</Button>
                    </div>
                    </div>
                    <Table responsive hover>
                        <thead>
                            <tr><th><small>Creator</small></th>
                                <th><small>Template Name</small></th>
                                <th><small>Editor type</small></th>
                                <th><small>Email Subject</small></th>
                                <th><small>From</small></th>
                                <th><small>To</small></th>
                                <th><small>cc</small></th>
                                <th><small>Updated</small></th>
                                <th><small>Action</small></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Template.map((temp)=>{return(<>
                            <tr> <td><span className='badge bg-success'>{temp.creator}</span></td>
                                <td className='fw-bold'>{temp.TemplateName}</td>
                                <td><span className='badge bg-primary'>{temp.Editor}</span></td>
                                <td>{temp.subject}</td>
                                <td>{temp.from}</td>
                                <td>{temp.to}</td>
                                <td>{temp.cc}</td>
                                <td>{temp.updated}</td>
                                <td><small><span className='text-primary'><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Template</Tooltip>}><i className='fas fa-eye me-2' onClick={handleShow1}></i></OverlayTrigger></span></small>
                                <Link to="/submit"><small><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Edit Template</Tooltip>}><i className='fas fa-edit me-2'></i></OverlayTrigger></small></Link>
                                <small><span className='text-warning'><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Clone Template</Tooltip>}><i className='fas fa-clone me-2' onClick={()=>{toast.warn("Currently Not cloned")}}></i></OverlayTrigger></span></small>
                                <small><span className='text-danger'><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Delete Template</Tooltip>}><i className='fas fa-trash-alt me-2' onClick={()=>{toast.error("Currently Not Deleted")}}></i></OverlayTrigger></span></small>
                                </td>
                            </tr>
                            </>)})}
                        </tbody>
                    </Table>
                    </Card.Body>
                    </Card>
                    </div>
        </Container>

                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                    <Modal.Title><h5 className='text-primary'>Email Setup</h5></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                   <Form>
                       <Row>
                           <Col xs={6}>
                            <Form.Group className='mb-3'>
                                <Form.Label>SMTP Hostname</Form.Label>
                                <Form.Control type="text" defaultValue="mail.example.com" name="hostname" />
                            </Form.Group>
                           </Col>
                           <Col xs={6}>
                           <Form.Group className='mb-3'>
                                <Form.Label>SMTP Usename</Form.Label>
                                <Form.Control type="email" defaultValue="user@example.com" name="username" />
                            </Form.Group>
                               </Col>
                       </Row>
                       <Row>
                           <Col xs={6}>
                            <Form.Group className='mb-3'>
                                <Form.Label>SMTP Password</Form.Label>
                                <Form.Control type="password" defaultValue="12344" name="pass" />
                            </Form.Group>
                           </Col>
                           <Col xs={6}>
                           <Form.Group className='mb-3'>
                                <Form.Label>SMTP Post </Form.Label>
                                <Form.Control type="number" defaultValue="25" name="post" />
                            </Form.Group>
                               </Col>
                       </Row>
                       <Row>
                           <Col xs={6}>
                            <Form.Group className='mb-3'>
                                <Form.Label>SMTP Sender Name</Form.Label>
                                <Form.Control type="text" defaultValue="prashant" name="sender" />
                            </Form.Group>
                           </Col>
                           <Col xs={6}>
                           <Form.Group className='mb-3'>
                                <Form.Label>SSL?</Form.Label>
                                    <div className='d-flex'>
                                    <Form.Check type='radio' label="yes" value="yes" />
                                    <Form.Check type='radio' label="No" value="no" className='mx-2' />
                                    </div>
                            </Form.Group>
                               </Col>
                       </Row>
                     
                   </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
                {/* view table template */}
                <Modal show={show1} onHide={handleClose1} size="lg">
                    <Modal.Header closeButton>
                    <Modal.Title>Template Name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <h6 className='mt-3 mb-2 mx-2 '>Creator:<span className='mx-3 text-primary'>Admin</span></h6>
                        <h6 className='mt-3 mb-2 mx-2 '>From:<span className='mx-3 text-primary'>pk@gmail.ccom</span></h6>
                        <h6 className='mt-3 mb-2 mx-2 '>To:<span className='mx-3 text-primary'>rk@gmail.com</span></h6>
                        <h6 className='mt-3 mb-2 mx-2 '>cc:<span className='mx-3 text-primary'>N/A</span></h6>
                        <h6 className='mt-3 mb-2 mx-2 '>Updated:<span className='mx-3 text-primary'>26-05-2022 12:00 A.PM</span></h6>
                        <h6 className='mt-3 mb-2 mx-2 '>Content:</h6>
                        <p className='mx-2'>This is the initial content of the editor.</p>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
    </div>
  )
}

export default Template