import React from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { Container, Col,Form,Row, Button } from 'react-bootstrap'

const Myofferedit = () => {
  return (
    <div>
         <NavbarMenu />
      <Sidebar />
        <Container style={{marginTop:'8rem'}}>
        <Form>
            <Row>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>JD number </Form.Label>
                  <Form.Control type='tel'  />
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>User ID  </Form.Label>
                  <Form.Control type='text'  />
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Candidate ID   </Form.Label>
                  <Form.Control type='tel' />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Today's Date </Form.Label>
                  <Form.Control type='date'  />
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Time </Form.Label>
                  <Form.Control type='time'  />
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>User name </Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Client Name </Form.Label>
                  <Form.Control type='text'  />
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Jd Tittle </Form.Label>
                  <Form.Control type='text'  />
                </Form.Group>
              </Col>
              </Row>
            <Row>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Client ID  </Form.Label>
                  <Form.Control type='tel'  />
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Offer candidate name </Form.Label>
                  <Form.Control type='text'  />
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Offered designation </Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Candidate new work location </Form.Label>
                  <Form.Control as="textarea" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Offered ctc </Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Sign up rate </Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Base invoice value  </Form.Label>
                  <Form.Control type='text' placeholder='offered ctc*sign up rate' />
                </Form.Group>
              </Col>
            
            </Row>
            <Row>
              <Col sm={4}>
                
                  <Form.Label className='fw-bold mb-3'>Offer accepted ?</Form.Label>
                    <div className='d-flex'>
                    <Form.Check type='radio'  name="offeraccepted" label="Yes" />
                  <Form.Check type='radio'  name="offeraccepted" label="No" className='mx-3'/>
                    </div>
                
              </Col>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>DOJ ? </Form.Label>
                  <Form.Control type='date'  />
                </Form.Group>
              </Col>
              <Col sm={4}>
              <Form.Label className='fw-bold mb-3'>Resigned ?</Form.Label>
                    <div className='d-flex'>
                    <Form.Check type='radio' value="yes" name="Resigned" label="Yes" />
                  <Form.Check type='radio' value="No" name="Resigned" label="No" className='mx-3'/>
                    </div>
              </Col>
            </Row>
            <Row>
            <Col sm={4}>
              <Form.Label className='fw-bold mb-3'>Copy of resignation received ?</Form.Label>
                    <div className='d-flex'>
                    <Form.Check type='radio' value="yes" name="resignation" label="Yes" />
                  <Form.Check type='radio' value="No" name="resignation" label="No" className='mx-3'/>
                    </div>
              </Col>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>User incentives (will be calculated by formula if %) ?</Form.Label>
                  <Form.Control type='number' placeholder='' />
                  <p className='text-muted'>please discuss with admin, if absolute value. </p>
                </Form.Group>
              </Col>
              <Col sm={4}>
              <Form.Label className='fw-bold mb-3'>Joined ?</Form.Label>
                    <div className='d-flex'>
                    <Form.Check type='radio' value="yes" name="Joined" label="Yes" />
                  <Form.Check type='radio' value="No" name="Joined" label="No" className='mx-3'/>
                    </div>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>User comments/remarks</Form.Label>
                  <Form.Control as="textarea" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant='success'>Save</Button>
            <Button variant='success'>Close</Button>
            
          </Form>
        </Container>
    </div>
  )
}

export default Myofferedit