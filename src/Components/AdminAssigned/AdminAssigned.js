import React, {useState} from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { Container, Row, Col, Card, Tabs, Tab, Form, Button, Dropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const AdminAssigned = () => {
const [acnumber, setacnumber] = useState('1234-xxxx-xxx')

const [select, setselect] = useState(false);
const handleSelect = () => {
    setselect(!select)
}
const [select1, setselect1] = useState(true);
const handleSelect1 = () => {
    setselect1(!select1)
}
const handleSelect2 = () => {
    setselect1('showticked')
}
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
                                    <li className='active'><i className="fas fa-user me-2"></i><Link to="/Admin-Assigned-Information" className='active-link'>My Profile</Link></li>
                                    <li><i className="fas fa-cog me-2"></i> <Link to="/Settings">Settings</Link></li>
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
                      
                    <Tabs defaultActiveKey="Admin assigned Information" id="uncontrolled-tab-example" className="shadow">
                <Tab eventKey="Admin assigned Information" title="Admin assigned Information">
                <Form>
                    <Row>
                        <Col xs={4}>
                       <Form.Group>
                           <Form.Label className='mt-2' >My User ID </Form.Label>
                           <Form.Control type='number' value="002" name="user_id" disabled />
                       </Form.Group>
        
                        </Col>
                        <Col xs={4}>
                   
                       <Form.Group>
                           <Form.Label className='mt-2' >My category</Form.Label>
                           <Form.Control type='text' defaultValue="C" name="category" disabled  />
                       </Form.Group>
                   
                        </Col>
                        <Col xs={4}>
                        
                       <Form.Group>
                           <Form.Label className='mt-2' >My official email ID  </Form.Label>
                           <Form.Control type='email' defaultValue="name@domain.com" name="user_id" disabled />
                       </Form.Group>
                   
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                       
                       <Form.Group>
                           <Form.Label className='mt-2' >Default Email password </Form.Label>
                           <Form.Control type='password' value="123445" name="user_id" disabled />
                       </Form.Group>
               
                        </Col>
                        <Col xs={6}>
                       <Form.Group>
                           <Form.Label className='mt-2' >No. of JDs I can lock per day-  </Form.Label>
                           <Form.Control type='number' defaultValue="1" name="category"disabled />
                       </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>

                       <Form.Group>
                           <Form.Label className='mt-2' >Admin’s CVs quality check </Form.Label>
                           <Form.Control type='text' defaultValue="No" name="cv_check"  disabled/>
                       </Form.Group>
                        </Col>
                        <Col xs={6}>
                       <Form.Group>
                           <Form.Label className='mt-2' >Am I privileged to see the full content of JD before I pick/lock it?</Form.Label>
                           <Form.Control type='text' defaultValue="yes" name="jd_lock" disabled />
                       </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>

                       <Form.Group>
                           <Form.Label className='mt-2' >What will be my designation in the email signature for client/candidate coordination</Form.Label>
                           <Form.Control type='text' defaultValue="Recruiter" name="designation" disabled />
                       </Form.Group>
                        </Col>
                        <Col xs={6}>
                       <Form.Group>
                           <Form.Label className='mt-2' >Allow user to remove candidate’s mobile number from the tracker sheet</Form.Label>
                           <Form.Control type='text'  name="removecandidate" disabled />
                       </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>

                       <Form.Group>
                           <Form.Label className='mt-2' >Am I allowed user to write special remarks, comments in the tracker sheet?</Form.Label>
                           <Form.Control type='text' defaultValue="No" name="comment" disabled />
                       </Form.Group>
                        </Col>
                        <Col xs={6}>
                       <Form.Group className='mt-3'>
                           <Form.Label className='mt-2' >Am I allowed to give One candidate submissiont?</Form.Label>
                           <Form.Control type='text' defaultValue="No" name="candidatesubmissiont" disabled />
                       </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>

                      
                           <Form.Label className='mt-2' >Am I allowed to update the 'status' field in my workspace?</Form.Label>
                            <Form.Control value="No" disabled />
                      
                        </Col>
                        <Col xs={6}>
                        <Form.Label className='mt-2' >Am I allowed to do the client coordination on case to case basis?</Form.Label>
                        <Form.Control value="No" disabled />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className='mt-3'>
                                <Form.Label className='mt-2'>How many mobile numbers I can unlock in a day if I am using Talent Tracker’s Candidate Database</Form.Label>
                                <Form.Control type='number' defaultValue="25" name="numberunlock" disabled  />
                            </Form.Group>
                            
                        </Col>

                        <Col md={6}>
                            <Form.Group className='mt-3'>
                                <Form.Label>Based on my KYC, I am assigned as a </Form.Label>
                                <Form.Control value="Consultancy" disabled />
                                    {/* <option value="consultancy">Consultancy</option>
                                    <option value="individual">Individual</option> */}
                                {/* </Form.Select> */}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className='mt-3'>
                                <Form.Label className='mt-2'>Am I assigned a fixed payout irrespective of the JD I handle? </Form.Label>
                                <Form.Control value="Yes, I am assigned a fix payout" disabled />
                                    {/* <option value="Yes, I am assigned a fix payout">Yes, I am assigned a fix payout</option>
                                    <option value="No, it will change from JD to JD">No, it will change from JD to JD</option> */}
                                {/* </Form.Select> */}
                            </Form.Group>
                            
                        </Col>

                        <Col md={6}>
                            <Form.Group className='mt-3'>
                                <Form.Label>Am I allowed to view Client SPOC’s mobile number in the JD </Form.Label>
                                    <Form.Control defaultValue="yes" disabled/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        
                    <Col md={6}>
                            <Form.Group className='mt-3'>
                                <Form.Label>Am I allowed to do the CVs submission to the client?   </Form.Label>
                                    <Form.Control defaultValue="yes" disabled />
                            </Form.Group>
                        </Col>
                    </Row>

                    </Form>
                </Tab>
                <Tab eventKey="personal information" title="Personal Information" >
                    <Form>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type='text' value='Prashant' name="firstname" />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type='text' value='Kumar' name="lastname" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Personal Email</Form.Label>
                                    <Form.Control type='email' value='example@gmail.com' name="email" />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Phone No.</Form.Label>
                                    <Form.Control type='tel' value='12345678' name="phone" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Gender</Form.Label>
                                    <div className='d-flex'>
                                    <Form.Check type='radio' value='Male' name="gender" label="Male"  />
                                    <Form.Check type='radio' value='Female' name="gender" label="Female" />
                                    </div>
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col xs={12}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Current Location</Form.Label>
                                    <Form.Control as="textarea" rows={3} name="address" value="patna, Bihar"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant='primary'>Save</Button>
                    </Form>
                   
                </Tab>
                <Tab eventKey="work information " title="work information" >
                <Form>
                    <Row>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Highest qualification</Form.Label>
                           <Form.Control type='text' value='mba' name="qualification" />
                       </Form.Group>
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Graduation</Form.Label>
                           <Form.Control type='text' name="graduation" />
                       </Form.Group>        
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Date of birth</Form.Label>
                           <Form.Control type='Date' name="dob" />
                       </Form.Group>        
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Languages known </Form.Label>
                           <Form.Control type='text' value='Hindi, English' name="lang" />
                       </Form.Group>
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Attach adhar card</Form.Label>
                           <Form.Control type='file' name="adhar" />
                       </Form.Group>        
                        </Col>
                        <Col xs={4} className={select1?'showticked':'showticked1'}>
                        <Form.Group className='mb-3 mt-2' >
                           <Form.Label>Certificate of incorporation (if consultancy)</Form.Label>
                           <Form.Control type='file' name="coi" />
                       </Form.Group>        
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} className={select1?'showticked':'showticked1'}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>GST number </Form.Label>
                           <Form.Control type='number' value='12345566' name="gnumber" />
                       </Form.Group>
                        </Col>
                        <Col xs={4} className={select1?'showticked':'showticked1'}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>GST certificate </Form.Label>
                           <Form.Control type='file' name="gcertificate" />
                       </Form.Group>        
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>No. of years Recruitment experience (India/international)</Form.Label>
                           <Form.Control type='number' name="no_ofexperience" value="4" />
                       </Form.Group>        
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Preference</Form.Label>
                           <div className='d-flex'>
                           <Form.Check type='radio'  name="prefrence" label="IT"/>
                           <Form.Check type='radio'  name="prefrence" label="Non IT" className='mx-3'/>
                           </div>
                       </Form.Group>
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Currently employed for some organization as a full time employee?</Form.Label>
                           <div className='d-flex'>
                           <Form.Check type='radio'  name="currentlyemployed" label="Yes"/>
                           <Form.Check type='radio'  name="currentlyemployed" label="No" className='mx-3'/>
                           </div>
                       </Form.Group>        
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Are you a consultancy or an individual? </Form.Label>
                           <div className='d-flex'>
                           <Form.Check type='radio'  name="consultancy" label="Yes" onClick={handleSelect1} />
                           <Form.Check type='radio'  name="consultancy" label="No" className='mx-3'onClick={handleSelect2} />
                           </div>
                       </Form.Group>        
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Own portal available? </Form.Label>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="light">
                                Choose
                                </Dropdown.Toggle>

                                <Dropdown.Menu variant="dark">

                                <Dropdown.Item onClick={handleSelect}>Yes</Dropdown.Item>
                                <Dropdown.Item onClick={handleSelect }>No</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                            <div className={select?'showselect1':'showselect'}>
                           <Form.Select type='text'  name="Ownportal" className='mt-3'>
                               <option value="Naukri">Naukri</option>
                               <option value="Monsterkkb">Monster</option>
                               <option value="Shine">Shine</option>
                               <option value="Times jobs">Times jobs</option>
                               <option value="etc">etc</option>
                           </Form.Select>
                           </div>
                       </Form.Group>
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Preferred industries to take JDs</Form.Label>
                           <Form.Select name='preferredindustries'>
                               <option value="yes">Yes</option>
                               <option value="no">No</option>
                           </Form.Select>
                       </Form.Group>        
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Handle PAN India JDs or only regional?</Form.Label>
                           <div className='d-flex'>
                           <Form.Check type='radio'  name="consultancy" label="Yes"/>
                           <Form.Check type='radio'  name="consultancy" label="No" className='mx-3'/>
                           </div>
                       </Form.Group>        
                        </Col>
                    </Row>
                    <Button className='mt-2'>Save</Button>
                   </Form>
                   </Tab>
                   <Tab eventKey="Bank Details" title="Bank Details" >
                   <Form>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Name Of Bank</Form.Label>
                                    <Form.Control type='text' value='State Bank' name="bankname" />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Branch Location</Form.Label>
                                    <Form.Control type='text' value='Patna' name="branch" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Name as per bank account</Form.Label>
                                    <Form.Control type='text' value='Prashant' name="name" />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Phone No.</Form.Label>
                                    <Form.Control type='tel' value='12345678' name="phone" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Account No.</Form.Label>
                                    <Form.Control name="tel" value={acnumber}  type='text'onChange={(e)=>setacnumber(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>IFSC</Form.Label>
                                    <Form.Control name="ifcc" value="SBIN0007" type='text' />
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                        <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Account type</Form.Label>
                                    <Form.Select name="accounttype">
                                        <option>Select</option>
                                        <option value="savings">Savings</option>
                                        <option value="Current">Current</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control as="textarea" rows={3} name="address" value="patna, Bihar"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant='primary'>Save</Button>
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

export default AdminAssigned