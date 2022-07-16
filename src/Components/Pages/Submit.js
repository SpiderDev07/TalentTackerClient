import React, { useRef, useState} from 'react'
import { useFilePicker } from 'use-file-picker';
import { Container, Form, Button, Dropdown , Modal } from 'react-bootstrap'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import { Editor } from '@tinymce/tinymce-react';
const Submit = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [openFileSelector] = useFilePicker({
        accept: '.txt , .pdf, .csv, .docs', 
      });
    
    const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };

    const [Templates, setTemplates] = useState("Default Template..")
    const Template1 = ()=>setTemplates("This is template First.........")
    const Template2 = ()=>setTemplates("This is template second.........")
    const Template3 = ()=>setTemplates("This is template Third.........")
    const Template4 = ()=>setTemplates("This is template Fourth.........")
  return (
    <div className='submit' onLoad={()=>{toast.warning("Work is on Progress...")}}>
        <ToastContainer position='top-center' />
        <NavbarMenu />
        <Container className='email-template'>
        <div className="cardTitle mb-4 d-flex justify-content-between align-items-center bg-light mt-2"><h5 className='text-primary '>Create Templates</h5>
                    <div className='d-flex'>
                    <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic" size='sm'>
                        Templates 
                    </Dropdown.Toggle>

                    <Dropdown.Menu>

                        <Dropdown.Item onClick={Template1}>Template 1</Dropdown.Item>
                        <Dropdown.Item onClick={Template2}>Template 2</Dropdown.Item>
                        <Dropdown.Item onClick={Template3}>Template 3</Dropdown.Item>
                        <Dropdown.Item onClick={Template4}>Template 4</Dropdown.Item>
                        
                    </Dropdown.Menu>
                    </Dropdown>
                    <Button className='mx-2' size='sm' onClick={() => openFileSelector()}>Attach tracker sheet</Button>
                    <Button className='mx-2' size='sm' onClick={() => openFileSelector()}>Attach CV's</Button>
                    </div>
                    </div>
                    <hr></hr>
                    <div className="cardTitle mb-4 d-flex justify-content-between align-items-center bg-light mt-2"><span></span>
                    <div className=' d-flex'>
                        <Button size='sm' onClick={()=>{toast.success("Saved")}}>Save</Button>
                        <Button variant='danger' size='sm' className='mx-2' as={Link} to="/templatelist">Discard</Button>
                        <Button variant='success' size='sm' className='mx-2' onClick={(handleShow)}>Add signature</Button>
                    </div>
                    </div>
                    <hr></hr>
            <Form>
            <Form.Group className='mb-2'>
                    <Form.Label>Template Name</Form.Label>
                    <Form.Control type="text" size='sm' />
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>From</Form.Label>
                    <Form.Control type="text" size='sm' />
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>To</Form.Label>
                    <Form.Control type="text" size='sm' />
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>Cc</Form.Label>
                    <Form.Control type="text" size='sm' />
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" size='sm' defaultValue="client name_ jd title, Location , userId" />
                </Form.Group>
                <Editor
                    apiKey='ru49dfoaikbq4wfagwpdj8xzwi0pxbkwyre28606w2hlfayb'
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue={Templates}
                    init={{
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
                <button className='btn btn-primary mt-3' onClick={log}><i className='fa fa-arrow-right me-2'></i>Send</button>
            </Form>
        </Container>
        <Sidebar />
        
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mt-3 mb-3 mx-3'>
                <Form.Label>Full name of the User : </Form.Label>
              
            </Form.Group>
            <Form.Group className='mt-3 mb-3 mx-3'>
            <Form.Label>Designation : </Form.Label>
              
            </Form.Group>
            <Form.Group className='mt-3 mb-3 mx-3'>
            <Form.Label>Talent Trackers Consulting Pvt Ltd</Form.Label>
              
            </Form.Group>
            <Form.Group className='mt-3 mb-3 mx-3'>
            <Form.Label>https://www.talenttrackers.in</Form.Label>
              
            </Form.Group>
           
            <div>
              <a href="https://facebook.com"><i className="fab fa-facebook ms-2 fa-2x"  /></a>
              <a href="https://facebook.com"><i className="fab fa-instagram me-2 ms-2 fa-2x" /></a>
              <a href="https://facebook.com"><i className="fab fa-twitter me-2 fa-2x" /></a>
              <a href="https://facebook.com"><i className="fab fa-linkedin me-2 fa-2x" /></a>
            </div>
             {/* <i className='fa fa-instagram'></i> <i className='fa fa-linkedin'></i> */}
             
              
           
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
       
    </div>
  )
}

export default Submit