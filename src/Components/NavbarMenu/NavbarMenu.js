import React from 'react'
import { Button, Navbar,NavDropdown, Nav, Container, Dropdown, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import useLocalStorage from 'use-local-storage'
import { useState, useEffect } from 'react'
import axios from 'axios';
const NavbarMenu = (Id) => {
  const [theme] = useLocalStorage('theme' ? 'dark' : 'topnav')
 const email=localStorage.getItem('email')
 const time=localStorage.getItem('time')
 const userid=localStorage.getItem('userId')
//const [email, Setemail]=useState([])
const [name, Setname]=useState([])
//const [userid, setuserId]=useState([])

const [rating, setrating]=useState([])

// useEffect(() => {
//   const fetchPosts = async () =>{
//     const res = await axios.get(`http://162.240.67.205:4000/api/usersbyId/${id}`);
//     Setemail(res.data.email);
//     Setname(res.data.firstname);
//     setuserId(res.data.userId);

//   }
//   fetchPosts();
// },[]);
useEffect(() => {
  const fetchPosts = async () =>{
    const res = await axios.get(`http://162.240.67.205:5000/api/viewRating`);
  
  setrating(res.data);
  }
  fetchPosts();
},[]);


  return (
    <div >
    <Navbar expand="lg" className='topnav' fixed='top' data-theme={theme}>
    <Container fluid>
    <Navbar.Brand as={Link} to="/"><img src="/images/logo.jpeg" alt="logo" /><span className='text-white fw-bold mx-3 ' >Talent Trackers Consulting Pvt Ltd</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto" >
      <Nav.Link as={Link} to="/Theme"><i className="fas fa-sun"></i></Nav.Link>
      <Dropdown>
  <Dropdown.Toggle variant="secondry" id="dropdown-basic" className='text-white'>
  <i className="fas fa-life-ring"></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>
  <NavDropdown.Item href="#action/3.1">Start live chat</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">SMS</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Whatsapp</NavDropdown.Item>
          
          <NavDropdown.Item href="#action/3.4">Best practices in candidate sourcing</NavDropdown.Item> 
          <NavDropdown.Item href="#action/3.4">Guidelines to use the platform</NavDropdown.Item> 
          <NavDropdown.Item href="#action/3.4">Do's & Don't</NavDropdown.Item> 
  
   
  </Dropdown.Menu>
</Dropdown>
      {/* <Nav.Link href="#features"><i className="fas fa-life-ring"></i></Nav.Link> */}
      <Dropdown>
        
      <Dropdown.Toggle variant="secondry" id="dropdown-basic" className='text-white'>
      <i className="fas fa-cog"></i>
  </Dropdown.Toggle>
  <Dropdown.Menu>
    {/* <Dropdown.Item as={Link} to="/MyProfile" className=' '><i className="fas fa-user me-2" /> My Profile</Dropdown.Item>
    <Dropdown.Divider /> */}
    <Dropdown.Item as={Link} to="/Admin-Assigned-Information" className=' '><i className="fas fa-user me-2"></i> My Profile</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown>
    <Dropdown.Toggle variant="secondry" id="dropdown-basic">
      <i className="fas fa-cog me-2"></i> Settings <span><i className="fas fa-angle-right"></i></span>
  </Dropdown.Toggle>
  <Dropdown.Menu className='sub-menu'>
  <Dropdown.Item as={Link} to="/Settings"><i className="fas fa-comment-alt me-2"></i>Notify me</Dropdown.Item> 
  <Dropdown.Item as={Link} to="/ChangePassword" ><i className="fas fa-lock me-2"></i>Change Password</Dropdown.Item> 
  <Dropdown.Item as={Link} to="/Unsubscribe" ><i className="fas fa-sign-out-alt me-2"></i>Unsubscribe</Dropdown.Item> 
  <Dropdown.Item as={Link} to="/setup-mailbox" ><i className="fas fa-mail-bulk  me-2"></i>Set up Mailbox in<br></br>  Outlook/Android phone</Dropdown.Item> 

  <Dropdown.Item as={Link} to="/Theme" ><i className="fas fa-palette me-2"></i>Theme</Dropdown.Item> 
  </Dropdown.Menu>
  </Dropdown>
  </Dropdown.Menu>
</Dropdown>
     
      <Nav>
        <Dropdown>
  <Dropdown.Toggle variant="secondry" id="dropdown-basic" className='text-white'>
  {email} <i className="fas fa-angle-down"></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <h4 className='text-center fw-bold' >{name}</h4>
    <div className='d-flex justify-content-center'>
      <Link to='/logout'><Button variant='danger'>Logout</Button></Link>
    </div>
   <div className='d-flex justify-content-center mt-2'>
      <small className='text-muted text-center'>Last login: {time}</small>
   </div>
  
   <Dropdown.Divider />
   <p className='h6 '>Category <span style={{textAlign:'right', float:'right'}}>A</span></p>
   <p className='h6 mt-3 mb-3'>User ID <span style={{textAlign:'right', float:'right'}}>0012</span></p>
   <Dropdown.Divider />
   <p className='h6 mt-3 mb-3'>User Name <span style={{textAlign:'right', float:'right'}}>pkrs</span></p>
   <Dropdown.Divider />
   <h5 className='mt-3 mb-3'>My Rating</h5>
   {rating.map((userrating)=>{
    if(userrating.userId==userid){
    return(<>
    
   <ProgressBar now={10*userrating.rating}  className="mt-3 mb-3" label={userrating.rating} />
   </>)}
   })}
   <Dropdown.Divider />
   <a href='http://filterpage.com'>Filter Talent Tracker's Candidate Database <i className='fas fa-filter ms-2'></i></a>
   <Dropdown.Divider />
   <a href="https://cpanel.com" className='fw-bold'>Link for Webmail <i className="fab fa-cpanel fa-4x ms-2"></i></a>
  </Dropdown.Menu>
</Dropdown>
</Nav>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default NavbarMenu;