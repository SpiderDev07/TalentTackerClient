import React from 'react'
import { useNavigate, Link, Navigate } from 'react-router-dom';
import './Login.css'
import Input from "@material-ui/core/Input";
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { IconButton, TextField } from '@mui/material';
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import axios from 'axios';

const Login =()=> {
  let isLoggedIn=true;
  const authToken = JSON.parse(localStorage.getItem("token"));
    if(authToken===null){
      isLoggedIn=false
    }
  
  // const id=localStorage.getItem('id')
  // let gettoken=localStorage.getItem('token')
  //   if(gettoken==null || gettoken=="undefined" ){
  //       logedin=false;
  //   }

  //   const submithandleform = (e) =>{
  //     e.preventDefault();
  //     const defaultemail=user.firstname+"."+user.lastname+"@talenttracker.in";
  //     axios.post('http://localhost:4000/api/users',{
        
       
  //       email:user.email,
  //       password:user.password,
       
  //     }).then(res=>{
  //       if(res && res.status===200){
  //       alert("sucessfully inserted")
        
  //     navigate('/');
  //     }
  //       else if(res && res.status===400){
  //         alert("Email all ready exists try other email")
  //       }
  //     else{
  //       alert("try again")
  //     }
  //     })
      
          
  //       } 
      
      
  //       const [user, setUser]=useState({
         
  //         email:"",
  //         password:"",
        
          
        
  //       })
  //       function handle(e){
  //         const newuser={...user}
  //         newuser[e.target.id]=e.target.value
  //       setUser(newuser)
  //       }
      

  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [validationErrors, setValidationErrors] = React.useState(false);
  const [validationMessage, setValidationMessage] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestParams = {
      email: email,
      password: password,
     
    
      type: "password",
    };
    console.log("email",email)
    axios
      .post("http://162.240.67.205:5000/api/userlogin", requestParams)
      .then((response) => {
        if (response && response.status === 200) {
        
          console.log(response.data)
          if (response.data) {
            setValidationErrors(false);
            const data = response.data;
            console.log(data)
            localStorage.setItem("token", JSON.stringify(data.token));
            localStorage.setItem("id",(data.id));
            localStorage.setItem("email",(data.email));
            localStorage.setItem("time",(data.time));
            localStorage.setItem("userId",(data.userId));
           navigate("/Dashbaord")
          }
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.status
        ) {
          console.log(error.response.data.status);
          setValidationErrors(true);
          setValidationMessage("Invalid Email / Password");
          toast.error("incorrect Email & Password")
        }
      });
  };
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
    confirmPassword: "",
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  // const handlePasswordChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  //const [phone, setPhone] = React.useState("");
  //console.log(phone)

  // const handleOnChange = value => {
  //   setPhone(value);
  // };
 
     
    
  

  return (
    <div>

{isLoggedIn ? <Navigate to="/Dashbaord" />: <></>}
      <ToastContainer position={'top-center'} />
      
     <Container fluid>
        <Row>
          <Col sm={5} className="login-left">
          <div className="d-flex align-items-center position-absolute" style={{top: '10px' ,left: '10px'}}>
          <img src="images/logo.jpeg" style={{height:'60px', width:'60px'}} alt="logo" /><h5 class="fw-bold ms-2 mb-0 ">Talent Trackers Consulting Pvt Ltd</h5>
          </div>
            <Container className='mt-5 '>
              <Row className='align-items-center justify-content-center form-cont'>
                <Col md={8}>
                  <div className='mb-3'>
                    <h3 className='fw-bold'>Sign In</h3>
                    <p className='mb-3 text-muted'>Sign in into your account</p>
                  </div>
                  <Form onSubmit={handleSubmit}>
                <TextField type="email" id="standard-basic" name='email' variant='standard' label="Enter your Email" value={email}
              onChange={(e) => setEmail(e.target.value)} fullWidth  style={{marginBottom:"1.5rem"}} />
                  {validationErrors && (
              <InputLabel color="error" error style={{marginTop:"-1rem"}}>
                {validationMessage}
              </InputLabel>
            )}
    
  
                      <Input type={values.showPassword ? "text" : "password"} placeholder="Password" variant='standard'  name="password" value={password}
              onChange={(e) => setPassword(e.target.value)} fullWidth error={validationErrors}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
                      />
                      {validationErrors && (
              <InputLabel color="error" error>
                {validationMessage}
              </InputLabel>
            )}
                    <div className='mb-4 d-flex mt-3'>
                      <span className='me-auto '><Link to="/Signup" style={{textDecoration:'none'}}>Need an account?</Link></span>
                      <span className='ms-auto'><Link to="/ForgotPassword" style={{textDecoration:'none'}}>Forgot Password</Link></span>
                    </div>
                    <Button variant="primary" type="submit" className='mb-3'>
                      Login
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col sm={7} className="login-right">
            <h5 className='text-warning text-center mb-3 px-5'>Get instant access to Millions of Verified Emails and Direct Dials Powered by Lead Intelligence</h5>
          <div className='result-one'>
          <img src='/images/result_one.png' alt='result-one' />
          </div>
          <div className='result-two'>
          <img src='/images/result_two.png' alt='result-two' />
          </div>
          </Col>
        </Row>
      </Container>
    </div>)

}

export default Login