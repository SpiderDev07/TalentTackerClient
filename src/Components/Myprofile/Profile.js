import React, { useState, useEffect, useCallback } from 'react'
import { Container, Row, Col, Card, Form, Button, Tab, Tabs, Dropdown } from 'react-bootstrap'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { useNavigate, Navigate } from 'react-router-dom'
import './MyProfile.css'
import Select from 'react-select';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify'

const Profile = () => {
    // -----------------Fetch Personal info by Id start-----------------
    const [fname, setfname] = useState([]);

    const [lname, setlname] = useState([]);
    const [pemail, setpemail] = useState([]);
    const [mobile, setmobile] = useState([]);
    const [gender, setgender] = useState([]);
    const [location, setlocation] = useState([]);
    const id = localStorage.getItem("id");
    const baseURL = `http://162.240.67.205:5000/api`;
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`${baseURL}/usersbyId/${id}`);
            setfname(res.data.firstname);
            setlname(res.data.lastname);
            setpemail(res.data.email);
            setmobile(res.data.number);
            setgender(res.data.gender)
            setlocation(res.data.cLocation);

        }
        fetchUser();
    }, [])

    let logedin = true;


    const [getdata, setgetdata] = useState([]);
    const [userId, setUserId] = useState([])

    const [userWORK, setUserWORK] = useState({
        WIHighestQualification: "",
        WIGraduation: "",
        WIdob: "",
        WIlanguages: "",
        WIaadhar: "",
        WIrecexp: "",
        WIpref: "",
        WIcurrempstatus: "",
        WIInd_Or_Consul: "",
        WIOwnportalavailable: "",
        WIOwnportal: "",
        WIPrefInd: "",
        WIHandleJD: "",
        WIconProof: "",
        GST: "",
        GSTProof: "",
    });

    const [user, setBankInfo] = useState({
        BDNameofbank: "",
        BDbranchloc: "",
        BDnameasba: "",
        BDphone: "",
        BDaccno: "",
        BDIFSC: "",
        BDacctype: "",
        BDadress: "",
    });

    const fetchBankInfo = useCallback(async () => {
        let bankInfo = await axios.get(`${baseURL}/findBankbyID/${userId}`);
        setBankInfo(bankInfo.data);
    }, [userId, baseURL]);

    const fetchWorkInfo = useCallback(async () => {
        let personalInfo = await axios.get(`${baseURL}/findWorkByID/${userId}`);
        setUserWORK(personalInfo.data);
    }, [userId, baseURL]);

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`http://162.240.67.205:5000/api/allUser`);
            let f = await axios.get(`http://162.240.67.205:5000/api/usersbyId/62e9395506de3ce1e5da380a`);
            console.log(f)
            setgetdata(res.data);
        }
        fetchPost();
    }, []);

    useEffect(() => {
        fetchWorkInfo();
        fetchBankInfo();
    }, [fetchBankInfo, fetchWorkInfo, userId]);

    // -------------------END HERE-----------------------------

    // ---------------------UPDATE PERSONAL INFO-------------------
    const UpdatePInfo = (e) => {
        e.preventDefault();
        axios.put(`http://162.240.67.205:5000/api/udateUser/${id}`, {
            firstname: fname,
            lastname: lname,
            email: pemail,
            number: mobile,
            gender: gender,
            cLocation: location
        }).then(() => {
            toast.success("Updated Succesfully")
        })
    }
    // -----------------------END UPDATE PERSONAL INFO----------------
    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`http://162.240.67.205:5000/api/usersbyId/${id}`);
            setUserId(res.data.userId);
        }
        fetchPost();
    }, []);

    const navigate = useNavigate();

    // ---------Add bank Detail-------------
    const [bankValidated, setBankValidated] = useState(false)
    const handleSubmitInBankDetails = (event) => {
        console.log(user)
        const form = event.currentTarget;
        event.preventDefault();
        if (!form.checkValidity()) {
            event.stopPropagation();
            setBankValidated(true);
            return;
        }
        axios.post('http://162.240.67.205:5000/api/addBankDetail', {
            userId: userId,
            BDNameofbank: user.BDNameofbank,
            BDbranchloc: user.BDbranchloc,
            BDnameasba: user.BDnameasba,
            BDphone: user.BDphone,
            BDaccno: user.BDaccno,
            BDIFSC: user.BDIFSC,
            BDacctype: user.BDacctype,
            BDadress: user.BDadress,

        }).then(res => {
            if (res && res.status === 200) {
                toast.success("Bank Details Updated Succesfully");
                // navigate('/');
            }
            else if (res && res.status === 400) {
                toast.error("Email all ready exists try other email")
            }
            else {
                toast.done(res.statusText)
            }
        });
    }


    const handleChangeInBankTab = (e) => {
        let data = { ...user };
        const { target: { name, value } } = e;
        data[name] = value;
        setBankInfo({ ...data });
    }
    const [workFormValidate, setWorkFormValidated] = useState(false);
    //______ USER WORK INFORMATION______
    // ---------Add bank Detail-------------
    const submithandleform2 = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (!form.checkValidity()) {
            event.stopPropagation();
            setWorkFormValidated(true);
            return;
        }

        axios.post('http://162.240.67.205:5000/api/addUserWorkInformation', {
            userId: userId,
            WIHighestQualification: userWORK.WIHighestQualification,
            WIGraduation: userWORK.WIGraduation,
            WIdob: userWORK.WIdob,
            WIlanguages: userWORK.WIlanguages,
            WIaadhar: userWORK.WIaadhar,
            WIrecexp: userWORK.WIrecexp,
            WIpref: userWORK.WIpref,
            WIcurrempstatus: userWORK.WIcurrempstatus,
            WIInd_Or_Consul: userWORK.WIInd_Or_Consul,
            WIOwnportalavailable: userWORK.WIOwnportalavailable,
            WIOwnportal: userWORK.WIOwnportal,
            WIPrefInd: userWORK.WIPrefInd,
            WIHandleJD: userWORK.WIHandleJD,
            WIconProof: userWORK.WIconProof,
            GST: userWORK.GST,
            GSTProof: userWORK.GSTProof
        }).then(res => {
            if (res && res.status === 200) {
                alert("sucessfully inserted")
                // navigate('/');
            }
            else if (res && res.status === 400) {
                alert("Email all ready exists try other email")
            }
            else {
                alert("try again")
            }
        })


    }


    const handleChangeInWrokTab = (e, key) => {
        let data = { ...userWORK };
        if (key === "WIPrefInd") {
            data[key] = [...data[key], ...e.map(_ => _.value)];
        } else {
            const { target: { name, value, type, dataset } } = e;
            if (type === 'radio') {
                data[name] = dataset.value;
            } else {
                data[name] = value;
            }
        }
        setUserWORK({ ...data });
    }

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
    // Option for List of Industries in dropdown, Multi selection allowed

    const opionforindustries = [
        // {value:'Services', label:"Services"},
        // {value:'manufacturing', label:"manufacturing"},
        // {value:'IT-Information Technology', label:"IT-Information Technology"},
        // {value:'Education/E-Learning', label:"Education/E-Learning"},
        // {value:'Real estate/Construction', label:"Real estate/Construction"},
        // {value:'', label:""},
        // {value:'', label:""},
        // {value:'', label:""}
        { value: 'Services', label: 'Services' },
        { value: 'Manufacturing', label: 'Manufacturing' },
        { value: 'IT- Information Technology', label: 'IT- Information Technology' },
        { value: 'Education', label: 'Education' },
        { value: 'Real estate/Construction', label: 'Real estate/Construction' },
        { value: 'Finance/BFSI', label: 'Finance/BFSI' },
        { value: 'Healthcare/Pharm', label: 'Healthcare/Pharm' },
        { value: 'Retail', label: 'Retail' },
        { value: 'Hospitality', label: 'Hospitality' },
        { value: 'Public Sector/Philonthropy/Associations', label: 'Public Sector/Philonthropy/Associations' },
        { value: 'FMCG', label: 'FMCG' },
        { value: 'Textile', label: 'Textile' },
        { value: 'Telecom', label: 'Telecom' },
        { value: 'logistics/supply chain', label: 'logistics/supply chain' },
        { value: 'Media/Publishing/Entertainment', label: 'Media/Publishing/Entertainment' },
        { value: 'Others', label: 'Others' }
    ]
    const [selectedOption, setSelectedOption] = useState(null);

    let gettoken = localStorage.getItem('token')
    if (gettoken == null) {
        logedin = false;
    }
    return (
        <div>
            {logedin ? <></> : <Navigate to="/" />}
            <ToastContainer position='top-center' />
            <Sidebar Id={id} />
            <NavbarMenu Id={id} />
            <Container className='myprofile'>
                <Row>
                    <Col sm={12}>
                        <div className='right-side'>
                            <Card>
                                <Card.Body>

                                    <Tabs defaultActiveKey="Admin assigned Information" id="uncontrolled-tab-example" className="shadow">
                                        <Tab eventKey="Admin assigned Information" title="Admin assigned Information">
                                            <Form>
                                                {getdata.map((user) => {
                                                    if (user._id === id) {


                                                        return (

                                                            <>

                                                                <Row>
                                                                    <Col xs={4}>
                                                                        <Form.Group>
                                                                            <Form.Label className='mt-2' >My User ID </Form.Label>
                                                                            <Form.Control type='text' defaultValue={user.userId} name="user_id" disabled />
                                                                        </Form.Group>

                                                                    </Col>
                                                                    <Col xs={4}>

                                                                        <Form.Group>
                                                                            <Form.Label className='mt-2' >My category</Form.Label>
                                                                            <Form.Control type='text' defaultValue={user.Acategory} name="category" disabled />
                                                                        </Form.Group>

                                                                    </Col>
                                                                    <Col xs={4}>

                                                                        <Form.Group>
                                                                            <Form.Label className='mt-2' >My official email ID  </Form.Label>
                                                                            <Form.Control type='email' defaultValue={user.Aemail} name="user_id" disabled />
                                                                        </Form.Group>

                                                                    </Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col xs={6}>

                                                                        <Form.Group>
                                                                            <Form.Label className='mt-2' >Default Email password </Form.Label>
                                                                            <Form.Control type='text' value={user.Adefpassword} name="user_id" disabled />
                                                                        </Form.Group>

                                                                    </Col>
                                                                    <Col xs={6}>
                                                                        <Form.Group>
                                                                            <Form.Label className='mt-2' >No. of JDs I can lock per day-  </Form.Label>
                                                                            <Form.Control type='number' defaultValue={user.AmaxJDinaday} name="category" disabled />
                                                                        </Form.Group>
                                                                    </Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col xs={6}>

                                                                        <Form.Group>
                                                                            <Form.Label className='mt-2' >Admin’s CVs quality check is required in my category?  </Form.Label>
                                                                            <Form.Control type='text' defaultValue={user.ACVqualityCheck} name="cv_check" disabled />
                                                                        </Form.Group>
                                                                    </Col>
                                                                    <Col xs={6}>
                                                                        <Form.Group>
                                                                            <Form.Label className='mt-2' >Am I privileged to see the full content of JD before I pick/lock it?</Form.Label>
                                                                            <Form.Control type='text' defaultValue={user.AJDprivilege} name="jd_lock" disabled />
                                                                        </Form.Group>
                                                                    </Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col xs={6}>

                                                                        <Form.Group>
                                                                            <Form.Label className='mt-2' >What will be my designation in the email signature for client/candidate coordination</Form.Label>
                                                                            <Form.Control type='text' defaultValue={user.Adesignation} name="designation" disabled />
                                                                        </Form.Group>
                                                                    </Col>
                                                                    {/* <Col xs={6}>
                       <Form.Group>
                           <Form.Label className='mt-2' >Allow user to remove candidate’s mobile number from the tracker sheet</Form.Label>
                           <Form.Control type='text'  name="removecandidate" disabled />
                       </Form.Group>
                        </Col> */}
                                                                </Row>
                                                                <Row>
                                                                    <Col xs={6}>

                                                                        <Form.Group>
                                                                            <Form.Label className='mt-2' >Allow user to write special remarks, comments in the tracker sheet?</Form.Label>
                                                                            <Form.Control type='text' defaultValue={user.Awrite} name="comment" disabled />
                                                                        </Form.Group>
                                                                    </Col>
                                                                    <Col xs={6}>
                                                                        <Form.Group className='mt-3'>
                                                                            <Form.Label className='mt-2' >Am I allowed to give One candidate submissiont?</Form.Label>
                                                                            <Form.Control type='text' defaultValue={user.Aonecandidatesubm} name="candidatesubmissiont" disabled />
                                                                        </Form.Group>
                                                                    </Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col xs={6}>


                                                                        <Form.Label className='mt-2' >Am I allowed to update the 'status' field in my workspace?</Form.Label>
                                                                        <Form.Control value={user.Aupdtstatus} disabled />

                                                                    </Col>
                                                                    <Col xs={6}>
                                                                        <Form.Label className='mt-2' >Am I allowed to do the client coordination on case to case basis?</Form.Label>
                                                                        <Form.Control value="yes" disabled />
                                                                    </Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col md={6}>
                                                                        <Form.Group className='mt-3'>
                                                                            <Form.Label className='mt-2'>How many mobile numbers I can unlock in a day if I am using Talent Tracker’s Candidate Database</Form.Label>
                                                                            <Form.Control type='number' defaultValue={user.AmaxNolockinaday} name="numberunlock" disabled />
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
                                                                            <Form.Control value={user.fixedpayout} disabled />
                                                                            {/* <option value="Yes, I am assigned a fix payout">Yes, I am assigned a fix payout</option>
                                    <option value="No, it will change from JD to JD">No, it will change from JD to JD</option> */}
                                                                            {/* </Form.Select> */}
                                                                        </Form.Group>

                                                                    </Col>

                                                                    <Col md={6}>
                                                                        <Form.Group className='mt-3'>
                                                                            <Form.Label>Am I allowed to view Client SPOC’s mobile number in the JD </Form.Label>
                                                                            <Form.Control defaultValue={user.client_spoc_mob_no_tobe_shown_to_thisuser} disabled />
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
                                                            </>)
                                                    }
                                                })}
                                            </Form>

                                        </Tab>
                                        {/* <---------------------PERSONAL INFORMATION DETAIL START--------------------> */}
                                        <Tab eventKey="personal information" title="Personal Information" >
                                            <Form  >
                                                <Row>
                                                    <Col xs={6}>
                                                        <Form.Group className='mb-3'>
                                                            <Form.Label>First Name</Form.Label>
                                                            <Form.Control type='text' value={fname} name="fname" onChange={(e) => setfname(e.target.value)} />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <Form.Group className='mb-3'>
                                                            <Form.Label>Last Name</Form.Label>
                                                            <Form.Control type='text' name="lastname" value={lname} onChange={(e) => setlname(e.target.value)} />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={6}>
                                                        <Form.Group className='mb-3'>
                                                            <Form.Label>Personal Email</Form.Label>
                                                            <Form.Control type='email' value={pemail} name="pemail" onChange={(e) => setpemail(e.target.value)} />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <Form.Group className='mb-3'>
                                                            <Form.Label>Mobile No.</Form.Label>
                                                            <Form.Control type='tel' name="phone" value={mobile} onChange={(e) => setmobile(e.target.value)} />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={6}>
                                                        <Form.Group className='mb-3'>
                                                            <Form.Label>Gender</Form.Label>
                                                            <div className='d-flex'>
                                                                <Form.Check type='radio'
                                                                    value="Male"
                                                                    name="gender"
                                                                    label="Male"
                                                                    onChange={(e) => setgender(e.target.value)}
                                                                    checked={gender === "Male"}
                                                                />
                                                                <Form.Check type='radio' className='mx-2' value="Female" name="gender" label="Female" onChange={(e) => setgender(e.target.value)} checked={gender === "Female"} />
                                                            </div>
                                                        </Form.Group>
                                                    </Col>

                                                </Row>
                                                <Row>
                                                    <Col xs={12}>
                                                        <Form.Group className='mb-3'>
                                                            <Form.Label>Current Location</Form.Label>
                                                            <Form.Control as="textarea" rows={3} name="address" value={location} onChange={(e) => setlocation(e.target.value)} />
                                                        </Form.Group>
                                                    </Col>

                                                </Row>
                                                <Button variant='primary' type='submit' onClick={UpdatePInfo}>Save</Button>
                                            </Form>

                                        </Tab>

                                        {/* ------------USER WORK INFORMATION----------------------------------------------------- */}


                                        <Tab eventKey="work information " title="work information" >
                                            <Form noValidate validated={workFormValidate} onSubmit={(e) => submithandleform2(e)}>
                                                <Row>
                                                    <Col xs={4}>
                                                        <Form.Group className='mb-3 mt-2'>
                                                            <Form.Label>Highest qualification<span style={{ color: "red" }}>*</span></Form.Label>
                                                            <Form.Control type='text' id='WIHighestQualification' name="WIHighestQualification" value={userWORK.WIHighestQualification} onChange={handleChangeInWrokTab} required />
                                                            <Form.Control.Feedback type="invalid">
                                                                Please enter Highest qualification
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs={4}>
                                                        <Form.Group className='mb-3 mt-2'>
                                                            <Form.Label>Graduation<span style={{ color: "red" }}>*</span></Form.Label>
                                                            <Form.Control type='text' id='WIGraduation' name="WIGraduation" value={userWORK.WIGraduation} onChange={handleChangeInWrokTab} required />
                                                            <Form.Control.Feedback type="invalid">
                                                                Please enter a Graduation
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs={4}>
                                                        <Form.Group className='mb-3 mt-2'>
                                                            <Form.Label>Date of birth<span style={{ color: "red" }}>*</span></Form.Label>
                                                            <Form.Control type='Date' id='WIdob' name="WIdob" value={userWORK.WIdob} onChange={handleChangeInWrokTab} required />
                                                            <Form.Control.Feedback type="invalid">
                                                                Please choose a DOB
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={4}>
                                                        <Form.Group className='mb-3 mt-2'>
                                                            <Form.Label>Languages known <span style={{ color: "red" }}>*</span></Form.Label>
                                                            <Form.Control type='text' id='WIlanguages' name="WIlanguages" value={userWORK.WIlanguages} onChange={handleChangeInWrokTab} required />
                                                            <Form.Control.Feedback type="invalid">
                                                                Please enter languages known field
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs={4}>
                                                        <Form.Group className='mb-3 mt-2'>
                                                            <Form.Label>Attach adhar card<span style={{ color: "red" }}>*</span></Form.Label>
                                                            <Form.Control type='file' id='WIaadhar' name="WIaadhar" value={userWORK.WIaadhar} onChange={handleChangeInWrokTab} required />
                                                            <Form.Control.Feedback type="invalid">
                                                                Please upload adhaar copy
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs={4} className={select1 ? 'showticked' : 'showticked1'}>
                                                        <Form.Group className='mb-3 mt-2' >
                                                            <Form.Label>Certificate of incorporation (if consultancy)<span style={{ color: "red" }}>*</span></Form.Label>
                                                            <Form.Control type='file' id='WIconProofk' name="WIconProof" value={userWORK.WIconProof} onChange={handleChangeInWrokTab} required />
                                                            <Form.Control.Feedback type="invalid">
                                                                Please choose a any one option
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={4} className={select1 ? 'showticked' : 'showticked1'}>
                                                        <Form.Group className='mb-3 mt-2'>
                                                            <Form.Label>GST number <span style={{ color: "red" }}>*</span></Form.Label>
                                                            <Form.Control type='number' id='GST' name="GST" value={userWORK.GST} onChange={handleChangeInWrokTab} required />
                                                            <Form.Control.Feedback type="invalid">
                                                                Please choose a any one option
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs={4} className={select1 ? 'showticked' : 'showticked1'}>
                                                        <Form.Group className='mb-3 mt-2'>
                                                            <Form.Label>GST certificate <span style={{ color: "red" }}>*</span></Form.Label>
                                                            <Form.Control type='file' id='GSTProof' name="GSTProof" value={userWORK.GSTProof} onChange={handleChangeInWrokTab} required />
                                                            <Form.Control.Feedback type="invalid">
                                                                Please choose a any one option
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs={4}>
                                                        <Form.Group className='mb-3 mt-2'>
                                                            <Form.Label>No. of years Recruitment experience (India/international)<span style={{ color: "red" }}>*</span></Form.Label>
                                                            <Form.Control type='number' id='WIrecexp' name="WIrecexp" value={userWORK.WIrecexp} onChange={handleChangeInWrokTab} required />
                                                            <Form.Control.Feedback type="invalid">
                                                                Please choose a any one option
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={4}>
                                                        <Form.Group className='mb-3 mt-2'>
                                                            <Form.Label>Preference<span style={{ color: "red" }}>*</span></Form.Label>
                                                            <div className='d-flex'>
                                                                <Form.Check type='radio' id='WIpref' data-value="IT" name="WIpref" value={userWORK.WIpref} onChange={handleChangeInWrokTab} label="IT" required />
                                                                <Form.Check type='radio' id='WIpref' data-value="Non IT" name="WIpref" value={userWORK.WIpref} onChange={handleChangeInWrokTab} label="Non IT" className='mx-3' required />
                                                                <Form.Check type='radio' id='WIpref' data-value="Both" name="WIpref" value={userWORK.WIpref} onChange={handleChangeInWrokTab} label="Both" className='mx-3' required />
                                                            </div>
                                                            <Form.Control.Feedback type="invalid">
                                                                Please choose a any one option
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs={4}>
                                                        <Form.Group className='mb-3 mt-2'>
                                                            <Form.Label>Currently employed for some organization as a full time employee</Form.Label>
                                                            <div className='d-flex'>
                                                                <Form.Check type='radio' id='BDNameofbank' name="BDNameofbank" data-value="Yes" value={userWORK.BDNameofbank} onChange={handleChangeInWrokTab} label="Yes" required />
                                                                <Form.Check type='radio' id='BDNameofbank' name="BDNameofbank" data-value="No" value={userWORK.BDNameofbank} onChange={handleChangeInWrokTab} label="No" required className='mx-3' />
                                                            </div>
                                                            <Form.Control.Feedback type="invalid">
                                                                Please choose a any one option
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs={4}>
                                                        <Form.Group className='mb-3 mt-2'>
                                                            <Form.Label>Are you a consultancy or an individual?<span style={{ color: "red" }}>*</span> </Form.Label>
                                                            <div className='d-flex'>
                                                                <Form.Check type='radio' id='WIInd_Or_Consul' data-value="Consultancy" name="WIInd_Or_Consul" value={userWORK.WIInd_Or_Consul} onChange={handleChangeInWrokTab} label="Consultancy" required />
                                                                <Form.Check type='radio' id='WIInd_Or_Consul' data-value="Individual" name="WIInd_Or_Consul" value={userWORK.WIInd_Or_Consul} onChange={handleChangeInWrokTab} label="Individual" className='mx-3' required />
                                                            </div>

                                                            <Form.Control.Feedback type="invalid">
                                                                Please choose a any one option
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={4}>
                                                        <Form.Group className='mb-3 mt-2'>
                                                            <Form.Label>Own portal available? <span style={{ color: "red" }}>*</span></Form.Label>
                                                            <Form.Select
                                                                value={userWORK.WIOwnportal}
                                                                onChange={(value) => handleChangeInWrokTab(value, "WIOwnportal")}
                                                                name='WIOwnportal'
                                                                required
                                                            >
                                                                <option value="">Choose</option>
                                                                <option value="Yes">Yes</option>
                                                                <option value="No">No</option>

                                                            </Form.Select>
                                                            <div className={select ? 'showselect1' : 'showselect'}>
                                                                <Form.Select type='text' id='WIOwnportal' name="WIOwnportal" value={userWORK.WIOwnportal} onChange={handleChangeInWrokTab} className='mt-3' required>
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
                                                            <Form.Label>Preferred industries to take JDs<span style={{ color: "red" }}>*</span></Form.Label>
                                                            <Select
                                                                defaultValue={userWORK.WIPrefInd}
                                                                onChange={(value) => handleChangeInWrokTab(value, "WIPrefInd")}
                                                                options={opionforindustries}
                                                                isMulti
                                                                name='WIPrefInd'
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                Please choose a Preferred industries to take JDs.
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs={4}>
                                                        <Form.Group className='mb-3 mt-2'>
                                                            <Form.Label>Handle PAN India/Regional JDs or only regional?<span style={{ color: "red" }}>*</span></Form.Label>
                                                            <div className='d-flex'>
                                                                <Form.Check type='radio' id='WIHandleJD' name="WIHandleJD" value={userWORK.WIHandleJD} onChange={handleChangeInWrokTab} data-value="Pan India" label="Pan India" required />
                                                                <Form.Check type='radio' id='WIHandleJD' name="WIHandleJD" value={userWORK.WIHandleJD} onChange={handleChangeInWrokTab} data-value="Regional" label="Regional" className='mx-3' required />
                                                            </div>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Button className='mt-2' type='submit'>Save</Button>
                                            </Form>
                                        </Tab>





                                        {/* ___***_____________Add__BankDetail ___________________________________________Add______BankDetail _____________________________*/}
                                        <Tab eventKey="Bank Details" title="Bank Details" >
                                            <Form noValidate validated={bankValidated} onSubmit={handleSubmitInBankDetails}>
                                                <Row>
                                                    <Col xs={6}>
                                                        <Form.Group className='mb-3'>
                                                            <Form.Label>Name Of Bank<span style={{ color: "red" }}>*</span></Form.Label>
                                                            <Form.Control type='text' id='BDNameofbank' name="BDNameofbank" value={user.BDNameofbank} onChange={handleChangeInBankTab} required />
                                                            <Form.Control.Feedback type="invalid">
                                                                Please enter Name Of Bank
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <Form.Group className='mb-3'>
                                                            <Form.Label>Branch Location<span style={{ color: "red" }}>*</span></Form.Label>
                                                            <Form.Control type='text' id='BDbranchloc' name="BDbranchloc" value={user.BDbranchloc} onChange={handleChangeInBankTab} required />

                                                            <Form.Control.Feedback type="invalid">
                                                                Please enter Branch Location
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={6}>
                                                        <Form.Group className='mb-3'>
                                                            <Form.Label>Name as per bank account<span style={{ color: "red" }}>*</span></Form.Label>
                                                            <Form.Control type='text' id='BDnameasba' name="BDnameasba" value={user.BDnameasba} onChange={handleChangeInBankTab} required />
                                                            <Form.Control.Feedback type="invalid">
                                                                Please enter Name as per bank account
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <Form.Group className='mb-3'>
                                                            <Form.Label>Account No.<span style={{ color: "red" }}>*</span></Form.Label>
                                                            <Form.Control type="number" id='BDaccno' name="BDaccno" value={user.BDaccno} onChange={handleChangeInBankTab} required />

                                                            <Form.Control.Feedback type="invalid">
                                                                Please enter Account No.
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    {/* <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Phone No.</Form.Label>
                                    <Form.Control type='tel' name="phone" />
                                </Form.Group>
                            </Col> */}
                                                </Row>
                                                <Row>

                                                    <Col xs={6}>
                                                        <Form.Group className='mb-3'>
                                                            <Form.Label>IFSC<span style={{ color: "red" }}>*</span></Form.Label>
                                                            <Form.Control type='text' id='BDIFSC' name="BDIFSC" value={user.BDIFSC} onChange={handleChangeInBankTab} required />

                                                            <Form.Control.Feedback type="invalid">
                                                                Please enter IFSC code
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <Form.Group className='mb-3'>
                                                            <Form.Label>Account type<span style={{ color: "red" }}>*</span></Form.Label>
                                                            <Form.Select id='BDacctype' name="BDacctype" value={user.BDacctype} onChange={handleChangeInBankTab} required >
                                                                <option value="">Select</option>
                                                                <option value="savings">Savings</option>
                                                                <option value="Current">Current</option>
                                                            </Form.Select>

                                                            <Form.Control.Feedback type="invalid">
                                                                Please enter Account type
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col xs={12}>
                                                        <Form.Group className='mb-3'>
                                                            <Form.Label>Address<span style={{ color: "red" }}>*</span></Form.Label>
                                                            <Form.Control as="textarea" rows={3} id='BDadress' name="BDadress" value={user.BDadress} onChange={handleChangeInBankTab} required />

                                                            <Form.Control.Feedback type="invalid">
                                                                Please enter Address
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Button variant='primary' type='submit'>Save</Button>
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

export default Profile