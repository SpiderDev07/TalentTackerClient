import React, {useState, useEffect} from 'react'
import Sidebar from '../Sidebar/Sidebar';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import { Container, Button, Tooltip,OverlayTrigger, Form, Table, Modal, Row, Col, } from 'react-bootstrap';
import { Link , useNavigate} from 'react-router-dom';
import useLocalStorage from 'use-local-storage'
// import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify';
import Pdf from "../pdf/pdf1.pdf"
import ReactAudioPlayer from "react-audio-player";
import axios from 'axios';
const Listofjd2 = () => {
  const navigate=useNavigate();
  const Id= localStorage.getItem("id")
  const userId= localStorage.getItem("userId")
  const [getdata,setgetdata] = useState([]);
  // set user information like category
  var status="Open"
  const [jdlock, setjdlock]=useState([])


  useEffect(()=>{
    const fetchPost= async ()=>{
     const res = await axios.get(`http://162.240.67.205:5000/api/viewjd`);
 
     setjdlock(res.data);
         
    }
    fetchPost();
     },[]);


  const [category,setcatagory] = useState([]);

  useEffect(()=>{
    const fetchPost= async ()=>{
     const res = await axios.get(`http://162.240.67.205:5000/api/usersbyId/${Id}`);
 
         setcatagory(res.data.Acategory);
    }
    fetchPost();
     },[]);
  
    useEffect(()=>{
      const fetchPost= async ()=>{
       const res = await axios.get("http://162.240.67.205:5000/api/allJd");
   
           setgetdata(res.data);
      }
      fetchPost();
       },[]);
const [JDnumber, setJdnumber]=useState([])
const [ownDBPayoutone, setownDBPayoutone]=useState([])
const [ownDBPayouttwo, setownDBPayouttwo]=useState([])
const [ownDBPayoutthree, setownDBPayoutthree]=useState([])
const [ownDBPayoutfour, setownDBPayoutfour]=useState([])
const [deliveryDate, setdeliveryDate]=useState([])
const [jdTerms, setjdTerms]=useState([])

console.log("jdnumber",JDnumber)
console.log(ownDBPayoutone,
  ownDBPayoutthree,
   ownDBPayoutfour,
  deliveryDate)

const submithandleform = () =>{
 
  
  axios.post('http://162.240.67.205:5000/api/lockjd',{

    
    userId:userId,	
	JDNo:JDnumber,
	
  //  ownDBPayoutone:ownDBPayoutone,
  //  ownDBPayouttwo:ownDBPayouttwo,
  //  ownDBPayoutthree:ownDBPayoutthree,
  //   ownDBPayoutfour:ownDBPayoutfour,
  //   deliveryDate:deliveryDate,
  //   jdTerms:jdTerms,
   })
   .then((response) => {
    if (response && response.status === 200) {
      alert("Jd locked sucessfully",response.JDnumber)
    
  navigate('/jdlist2');
      
      
    }
  })
  .catch((error) => {
    if (
      error.response &&
      error.response.data &&
      error.response.status
    ) {
      console.log(error.response.data.status);
     
         alert("Email id allready exists")
    }
  });

}


    function refreshPage(){ 
        window.location.reload(); 
    }
 

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

 
    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = (JDnumber) =>{
      setJdnumber(JDnumber);
      setShow5(true);
    } 
    const [show6, setShow6] = useState(false);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);
    const [show7, setShow7] = useState(false);
    const handleClose7 = () => setShow7(false);
    const handleShow7 = () => setShow7(true);
    
    const [show8, setShow8] = useState(false);

    const handleClose8 = () => setShow8(false);
    const handleShow8 = () => setShow8(true);    

    const [theme] = useLocalStorage('theme' ? 'dark' : 'light')
    const notify = () => toast.success("Locked");
    // const options =[
    // {value:'Telephonic', label:'Telephonic'},
    // {value:'virtual (Teams meeting/Zoom call/ Google meet/ skype etc)', label:'virtual (Teams meeting/Zoom call/ Google meet/ skype etc)'},
    // {value:'Face to Face', label:'Face to Face'},
    // {value:'HR/Final round with Top Management', label:'HR/Final round with Top Management'},
    // ]
  return (
    <div data-theme={theme} style={{overflow:'hidden', height:'100vh'}}>
       <ToastContainer position={'top-center'}/>
    <Sidebar />
        <NavbarMenu />
        <Container className='jd-list'>
            <div className='d-flex text mb-2'>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Number of JD's</Tooltip>}><p >Number of JDs (7)</p></OverlayTrigger><span className='mx-3 fw-bold'>|</span>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Reload Page</Tooltip>}>
            <Button variant='light' size='sm' onClick={refreshPage}><i className="fas fa-redo-alt mb-3"></i></Button>
            </OverlayTrigger>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Filter Search of Jd list</Tooltip>}>
         <Link to="/JdListFilter"><Button variant='danger' className='mx-3' size='sm'><i className="fas fa-filter me-2"style={{color:'#fff'}} ></i>Filter</Button></Link>
         </OverlayTrigger>
         
            </div>
            </Container>
            <div className='jd-wraper' >
            <Container  className='table-data' fluid data-theme={theme}>
                <Table responsive className='data-table' hover >
                    <thead >
                        <tr>
                          <th></th>
                            <th>Status</th>
                            <th>JD No.</th>
                            
                            <th>JDs upload<br></br> date and time</th>
                            <th>Client Details</th>
                            <th>JD Details</th>
                            <th>Special <br></br>Comments/Remarks<br></br> by admin about JD</th>
                            <th>Term of JD</th>
                            <th>My payout</th>
                            <th>JD Discription</th>
                            
                            
                            <th>Assured delivery<br></br> required by<br></br> the client (TAT)</th>
                           
                            <th>Client coordination <br></br>to be done by whom?</th>
                            <th>CVs quality<br></br> check required<br></br> by Admin?</th>
                            <th>Lock for me</th>
                        
                        </tr>
                    </thead>
                    <tbody data-theme={theme}>
                      {getdata.map((jd)=>{
                        if(jd.UserCategory==category){
                        return(<>
                        <tr>
                          <td className='text-danger fw-bold text-center'>({jd.prioritytag})</td>
                          {jdlock.map((jdStatus)=>{
                if(jdStatus.JDNo==jd.JDnumber && jdStatus.userId==userId){
                 status="Pending"
                }})}
                            <td className='jdstatus'><Button variant='warning' className='me-2'>{status}</Button></td>
                            <td>{jd.JDnumber}</td>
                            
                            <td>{jd.JDuploadDate}</td>
                            <td className='position'>{jd.company_name}<br></br> <span > <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Client Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Automobile</span> |</span> 1000+</td>
                            <td className='deatail'>{jd.JDtitle} <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com' >India</a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">₹ 10000+</Tooltip>}><span className='fw-bold text-muted'>₹ 10000+</span></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
                            <td>Special Comments/Remarks</td>
                            <td className='jd-terms'><i className="fas fa-info-circle" onClick={handleShow4}></i></td>
                            <td className = 'jd-terms'><i className='fas fa-info-circle' onClick={handleShow7}></i></td>
                            <td><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a></td>
                            
                            
                            
                            <td>N/A</td>
                            <td>Admin</td>
                            <td >yes</td>
                            <td><Button variant='success' size='sm' onClick={()=>handleShow5(jd.JDnumber)}><i className="fas fa-lock me-1" ></i> Lock</Button></td>
                        </tr>
                       
                       
                        
                        </>)}
                      })}
                    </tbody>
                </Table>
            </Container>
            </div>
        <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-building me-3" ></i>Company Name / Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-user me-3"></i> Client Id: <span className='text-muted'>001</span></h6>
            <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-building me-3"></i> Company Name: <span className='text-muted'>Automobile</span></h6>
            <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-building me-3"></i> Industry: <span className='text-muted'>n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-user me-3"></i> Client type: <span className='text-muted'>Client type</span></h6>

            <h6 className='fw-bold mt-5 mb-3 mx-2'>Employee Size : <span className='text-muted'>1000+</span></h6>
            </Col>
            <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-map me-2"></i> Company location- HQ: <span className='text-muted'>India</span></h6>
            <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-map me-2"></i> Company address: <span className='text-muted'>Patna</span></h6>
            <h6 className='fw-bold mt-5 '> <i className="fab fa-firefox me-2"></i> Website: </h6>
            <a href="https://example.com">https://example.com</a>
            <h6 className='fw-bold mt-5 '> <i className="fab fa-linkedin me-2"></i>LinkedIn: </h6>
            <a href="https://linkedin.com" className='mx-3'>https://linkedin.com</a>
            </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Second Modal for jd details */}
      <Modal show={show1} onHide={handleClose1} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-suitcase me-3" ></i>Jd's Name Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-user"></i> Client name: <span className='text-muted'> pk</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> JD title: <span className='text-muted'> N/A</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-comment me-2"></i> Special comments/remarks by Admin about JD: <span className='text-muted'> Awesome</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-list me-2"></i> List of preferred companies to source candidates?: <span className='text-muted'> N/A</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-audio me-2"></i> Audio JD: <span className='mt-5'> <ReactAudioPlayer
      src="http://slider.kz/download/214/psv4.vkuseraudio.net/c815526/u211915439/audios/8e9a9be0b9e5/Caballero%20&%20Jeanjass%20(Chef)%20-%201.Chef.mp3"
      autoPlay
      controls
      style={{height:"4vh"}}
    /></span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> Salary Budget : <span className='text-muted'> n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-sort-amount-down me-2"></i> Experience: <span className='text-muted'> n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-book me-2"></i> Education: <span className='text-muted'> n/a</span></h6>
            </Col>
            <Col xs={6}>
            
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-map-marked-alt"></i> Work location of JD: <span className='text-muted'> Patna, Bihar , India</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-map-marked-alt"></i> Company address <span className='text-primary text-small'><i className='fas fa-info ms-2 me-2' onClick={()=>{toast.info("Interview location address can be different from this address")}}/></span>: <span className='text-muted'> N/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-building"></i> Client company name can be disclosed to the candidate? : <span className='text-muted'> Yes</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-file-csv"></i> Minimum number of CVs submission as required by the client? : <span className='text-muted'> 10</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fab fa-intercom"></i> Rounds of an interview: <span className='text-muted mt-2'> Face to Face</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-sticky-note"></i> Notice period preference given by the client: <span className='text-muted'> n/a</span></h6>
<h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-list"></i> No. of Vacancies : <span className='text-muted'> 50</span></h6>
<h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-sort-numeric-up-alt me-2"></i> No. of working days
: <span className='text-muted'> 20</span></h6>
            </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    
      {/* Jd terms modal */}
      <Modal show={show4} onHide={handleClose4} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Terms Of JD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
          <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i>  Sign up rate with client: <span className='text-muted'> 0</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> payment terms: <span className='text-muted'> N/A</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i> Replacement period: <span className='text-muted'> n/a</span></h6>
          </Col>
          <Col xs={6}>
          <h6 className='fw-bold mt-5 mb-5 mx-3'>  Number of submissions required: <span className='text-muted'> N/A</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'>Your payout : <span className='text-muted'> n/a</span></h6> 
            <h6 className='fw-bold mt-5 mb-5 mx-3'>Assured delivery required by client (TAT) : <span className='text-muted'> 23-05-2022 6:00 P.M</span></h6> 
            
          </Col>
        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Lock For me yes/no Modal  */}
      <Modal show={show5} onHide={handleClose5} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Lock For Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className='text-center'>Would you like to use “Own portal” (Naukri, Monster, Times jobs, Shine etc) or use “Talent Tracker’s Candidate Database?</h4>
            <div className='d-flex justify-content-center mt-5 mb-5'>
              <Button variant='success' className='me-5' onClick={handleShow6} size='sm' >Own Database (Naukri, Monster, Times Jobs, Shine etc)</Button>
            <Button variant="danger"  className='me-5' onClick={handleShow8} size='sm'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Talent Tracker’s Candidate Database &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Button>
            </div>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
      {/* After Clicking Yes Lock For me yes open jd lock modal with check box */}
      <Modal show={show6} onHide={handleClose6} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Lock For Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mt-3 mb-3 mx-3' >
              <Form.Check type='checkbox' label="% Payout if use our candidate database." value='% Payout if use our candidate database.'  onChange={(e)=>setownDBPayoutone(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3 mx-3'>
              <Form.Check type='checkbox' label="% Payout if use your own portal naukri/monster/times job etc." value='% Payout if use your own portal naukri/monster/times job etc.' onChange={(e)=>setownDBPayouttwo(e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3 mx-3'>
              <Form.Check type='checkbox' label="Absolute value payout if user uses own portal, " value='Absolute value payout if user uses own portal' onChange={(e)=>setownDBPayoutthree(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3 mx-3'>
              <Form.Check type='checkbox' label="Absolute value payout---if use our database" value='Absolute value payout---if use our database' onChange={(e)=>setownDBPayoutfour(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Check type='checkbox' label="I accept the assured delivery date" value='I accept the assured delivery date' onChange={(e)=>setdeliveryDate(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Check type='checkbox' label=" I accept the terms of JD" value='I accept the terms of JD'  onChange={(e)=>setjdTerms(e.target.value)} />
            </Form.Group>
            <Button variant='success'onClick={submithandleform} ><i className='fas fa-lock me-2' ></i>Lock</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose6}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show7} onHide={handleClose7} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>MY Payout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mt-3 mb-3 mx-3'>
              <Form.Check type='checkbox' label="Payout .......- if you use Own Portal" />
            </Form.Group>
            <Form.Group className='mb-3 mx-3'>
              <Form.Check type='checkbox' label=" Payout......-if you use talent trackers candidate database" />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose7}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show8} onHide={handleClose8} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Lock For Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mt-3 mb-3 mx-3'>
              <Form.Check type='checkbox' label="Your payout will be ........ for this JD" />
            </Form.Group>
            
            <Button variant='success' onClick={notify}><i className='fas fa-lock me-2'></i>Lock</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose8}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Listofjd2