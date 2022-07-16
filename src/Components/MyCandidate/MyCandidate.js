import React,{useState,useEffect} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import {CSVLink} from "react-csv"
import { toast, ToastContainer } from 'react-toastify'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Table, Button , Form ,OverlayTrigger, Tooltip, Pagination } from 'react-bootstrap'
import axios from 'axios'
const MyCandidate = () => {
  const userId=localStorage.getItem("userId")
  
const [condidate, setcondidate]= useState([]);
useEffect(() => {
  const fetchPosts = async () =>{
    const res = await axios.get(`http://162.240.67.205:5000/api/allcondidate`);
    setcondidate(res.data);
  }
  fetchPosts();
},[]);



const csvReport = {
    filename: 'MyCandidateTable.csv',
    data: condidate
}


  return (
    <div>
      <ToastContainer position='top-center' />
      <NavbarMenu />
      <Sidebar />

      <Container className='myworkspace'>
        <h5 className='mt-5 fw-bold text-center'>My Candidates</h5>
        <div className='mt-2 d-flex'>
        <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Sort My candidate list by date</Tooltip>}><Form.Control type='date' size='sm' className='mb-2' style={{width:"20%"}} /></OverlayTrigger>
        <CSVLink {...csvReport} style={{textDecoration:"none", color:"white"}}><Button className='mx-2 mb-2' size='sm'><i className='fas fa-download'/>CSV Download</Button></CSVLink>
        </div>
      </Container>
      <div className='jd-wraper'>
      <Container className='table-data' fluid>
        <Table className='data-table' hover fluid>
        <thead >
                <tr>
                            <th>*</th>
                            <th>Candidate ID </th>
                            <th>JD number </th>
                            <th>Client name</th>
                            <th>JD title </th>
                            <th>JD location </th>
                            <th>Recruiter ID </th>
                            <th>Candidate name </th>
                            <th>Current designation </th>
                            <th>Current salary </th>
                            <th>Last Appraisal of the candidate </th>
                            <th>Expected salary </th>
                            <th>Dropdown</th>
                            <th>Total experience </th>
                            <th>Education</th>
                            <th>Current organization </th>
                            <th>Current location </th>
                            <th>Candidate mobile number</th>
                            <th>Notice period </th>
                            <th>JD sent to candidate</th>
                            <th>candidate availability for the interview </th>
                            <th>Recruiter’s remarks </th>
                            <th>Date and time of adding a candidate</th>
                            <th>Special comments</th>
                        </tr>
                    </thead>
                    <tbody>
                    {condidate.map((student)=>{
                      if(student.recruiter_id==userId){
                      return(
                      
                       <>
                        <tr>
                            <td><Form.Check type='checkbox' value={student.id} onChange={(e)=>condidate(e.target.value)} onClick={()=>{toast.success(student.id + "Row of my candidate is selected")}} /></td>
                           
                           <td>{student.condidate_id}</td> 
                            
                            
                            
                           
                           <td>{student.jd_number}</td>
                           <td>{student.client_name}</td>
                           <td>{student.jd_title}</td>
                           <td>{student.jd_location}</td>
                           <td>{student.recruiter_id}</td>
                           <td>{student.condidate_name}</td>
                           <td>{student.condidate_cdesignation}</td>
                           <td>{student.condidate_csalary}</td>
                           <td>{student.condidate_c}</td>
                           <td>{student.c_fix}</td>
                           <td>{student.c_variable}</td>
                           <td>{student.current_salary}</td>
                           <td>{student.ctotal_salary}</td>
                           <td>{student.l_a_condidate}</td>

<td>{student.expected_salary}</td>
<td>{student.experience}</td>
<td>{student.education}</td>
<td>{student.c_oraganization}</td>
<td>{student.c_location}</td>
<td>{student.c_mobile}</td>
<td>{student.notice_p}</td>
<td>{student.jdSendToCondidate}</td>
<td>{student.interviewTime}</td>
                        </tr>
                     </>
                    )}})}
                    </tbody>
             
        </Table>
        </Container>
        </div>
        <Container className='mt-3'>
        <Pagination>
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item onClick={()=>{toast.info("Currently Not active")}}>{2}</Pagination.Item>
        <Pagination.Item onClick={()=>{toast.warn("Currently Not active")}}>{3}</Pagination.Item>
        <Pagination.Next onClick={()=>{toast.dark("Currently Not active")}} />
        <Pagination.Last onClick={()=>{toast.error("Currently Not active")}} />
        </Pagination>
        </Container>
    </div>
  )
}

export default MyCandidate