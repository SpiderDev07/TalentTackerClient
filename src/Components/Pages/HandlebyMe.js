import React from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { Container, Table, Button, OverlayTrigger, Tooltip, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {CSVLink} from "react-csv"
const HandlebyMe = () => {
    const handlebyMeList =[
        {JDNumber:"1",DatetimeofJDlocking:"24-05-2022",ClientID:"001",ClientName:"pkrs",JDtitle:"N/A",JDlocation:"India",signuprate:"N/A",paymentterms:"N/a",Noofsubmissions:"6",DateTimefsubmission:"23-05-2022",Status:"joined",Exchangenoteswithadmin:"N/A"},
        {JDNumber:"2",DatetimeofJDlocking:"24-05-2022",ClientID:"001",ClientName:"pkrs",JDtitle:"N/A",JDlocation:"India",signuprate:"N/A",paymentterms:"N/a",Noofsubmissions:"6",DateTimefsubmission:"23-05-2022",Status:"joined",Exchangenoteswithadmin:"N/A"},
        {JDNumber:"3",DatetimeofJDlocking:"24-05-2022",ClientID:"001",ClientName:"pkrs",JDtitle:"N/A",JDlocation:"India",signuprate:"N/A",paymentterms:"N/a",Noofsubmissions:"6",DateTimefsubmission:"23-05-2022",Status:"joined",Exchangenoteswithadmin:"N/A"},
        {JDNumber:"4",DatetimeofJDlocking:"24-05-2022",ClientID:"001",ClientName:"pkrs",JDtitle:"N/A",JDlocation:"India",signuprate:"N/A",paymentterms:"N/a",Noofsubmissions:"6",DateTimefsubmission:"23-05-2022",Status:"joined",Exchangenoteswithadmin:"N/A"},
        {JDNumber:"5",DatetimeofJDlocking:"24-05-2022",ClientID:"001",ClientName:"pkrs",JDtitle:"N/A",JDlocation:"India",signuprate:"N/A",paymentterms:"N/a",Noofsubmissions:"6",DateTimefsubmission:"23-05-2022",Status:"joined",Exchangenoteswithadmin:"N/A"},
        {JDNumber:"6",DatetimeofJDlocking:"24-05-2022",ClientID:"001",ClientName:"pkrs",JDtitle:"N/A",JDlocation:"India",signuprate:"N/A",paymentterms:"N/a",Noofsubmissions:"6",DateTimefsubmission:"23-05-2022",Status:"joined",Exchangenoteswithadmin:"N/A"},
        {JDNumber:"7",DatetimeofJDlocking:"24-05-2022",ClientID:"001",ClientName:"pkrs",JDtitle:"N/A",JDlocation:"India",signuprate:"N/A",paymentterms:"N/a",Noofsubmissions:"6",DateTimefsubmission:"23-05-2022",Status:"joined",Exchangenoteswithadmin:"N/A"},
        {JDNumber:"8",DatetimeofJDlocking:"24-05-2022",ClientID:"001",ClientName:"pkrs",JDtitle:"N/A",JDlocation:"India",signuprate:"N/A",paymentterms:"N/a",Noofsubmissions:"6",DateTimefsubmission:"23-05-2022",Status:"joined",Exchangenoteswithadmin:"N/A"},
        {JDNumber:"9",DatetimeofJDlocking:"24-05-2022",ClientID:"001",ClientName:"pkrs",JDtitle:"N/A",JDlocation:"India",signuprate:"N/A",paymentterms:"N/a",Noofsubmissions:"6",DateTimefsubmission:"23-05-2022",Status:"joined",Exchangenoteswithadmin:"N/A"},
        {JDNumber:"10",DatetimeofJDlocking:"24-05-2022",ClientID:"001",ClientName:"pkrs",JDtitle:"N/A",JDlocation:"India",signuprate:"N/A",paymentterms:"N/a",Noofsubmissions:"6",DateTimefsubmission:"23-05-2022",Status:"joined",Exchangenoteswithadmin:"N/A"},
        {JDNumber:"11",DatetimeofJDlocking:"24-05-2022",ClientID:"001",ClientName:"pkrs",JDtitle:"N/A",JDlocation:"India",signuprate:"N/A",paymentterms:"N/a",Noofsubmissions:"6",DateTimefsubmission:"23-05-2022",Status:"joined",Exchangenoteswithadmin:"N/A"},

     ]
     const csvReport = {
        filename: 'table.csv',
        data: handlebyMeList
    }
  return (
    <div>
        <NavbarMenu />
        <Sidebar />
         <Container className='jd-list'>
             <h4 className='text-center mt-3 mb -3 text-muted'>JDs handled by me list</h4>
            <div className='d-flex text mb-2'>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Download table data into csv formate</Tooltip>}><CSVLink {...csvReport} style={{textDecoration:"none", color:"white"}}><Button variant='success' size='sm'><i className="fas fa-download me-2"/>CSV Download</Button></CSVLink></OverlayTrigger>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Reload Page</Tooltip>}>
            <Button variant='light' size='sm' ><i className="fas fa-redo-alt"></i></Button>
            </OverlayTrigger>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Handle by me filter</Tooltip>}>
         <Link to="/HandleByMeFilter"><Button variant='danger' className='mx-3' size='sm'><i className="fas fa-filter me-2"style={{color:'#fff'}} ></i>Filter</Button></Link>
         </OverlayTrigger>
         
            </div>
            </Container>
            <div className='jd-wraper' >
            <Container  className='table-data' fluid>
                <Table responsive className='data-table' hover >
                    <thead>
                        <tr>
                            <th>JD Number</th>
                            <th>Date-time of<br></br> JD locking</th>
                            <th>Client ID</th>
                            <th>Client Name</th>
                            <th>JD title</th>
                            <th>JD location</th>
                            <th>Sign up rate</th>
                            <th>Payment terms</th>
                            <th>No. of <br></br>submissions</th>
                            <th>Date-Time <br></br>of submission</th>
                            <th>Status</th>
                            <th>Exchange notes<br></br> with admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {handlebyMeList.map((list)=>{return(<>
                        <tr>
                            <td>{list.JDNumber}</td>
                            <td>{list.DatetimeofJDlocking}</td>
                            <td>{list.ClientID}</td>
                            <td>{list.ClientName}</td>
                            <td>{list.JDtitle}</td>
                            <td>{list.JDlocation}</td>
                            <td>{list.signuprate}</td>
                            <td>{list.paymentterms}</td>
                            <td>{list.Noofsubmissions}</td>
                            <td>{list.DateTimefsubmission}</td>
                            <td>{list.Status}</td>
                            <td>{list.Exchangenoteswithadmin}</td>
                        </tr>
                        </>)})}
                    </tbody>
                    </Table>
                    </Container>
                    </div>
    </div>
  )
}

export default HandlebyMe