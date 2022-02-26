import $ from 'jquery'
import { useNavigate, useLocation } from "react-router";
import { useEffect, useState } from 'react';
import HeaderAdmin from '../Components/HeaderAdmin';
import Footer from '../Components/Footer';
import Dashboard from './Dashboard';
import Table from './Table';
import axios from 'axios';
import { toaster } from 'evergreen-ui';
import Modal from 'react-bootstrap/Modal';

function Admin() {

    const [records, setRecords] = useState([]);

    const userDetails = useLocation().state;

    const [show, setShow ] = useState(false);

    const [errorDesc, setErrorDesc] = useState("");


    useEffect(()=>{
       getUsers(); 
    },[]);


    const getUsers=()=>{
        axios.request({
            url:"http://localhost:9080/api/user/view",
            method:"GET",
            headers:{
                authorization : "Bearer "+userDetails.token.access_token
            }
        }).then(res=>{
            setRecords(res.data.serviceData);
        }).catch(err=>{
            console.log(err)
        })
    }

    const handleChange=(value, obj, property)=>{
        const newRecords = JSON.parse(JSON.stringify(records))
        if(property === "status"){
            newRecords.find(rec=>rec.userId === obj.userId).status = value;
            newRecords.find(rec=>rec.userId === obj.userId).confirm= true;
        }else if(property === "confirm"){
            newRecords.find(rec=>rec.userId === obj.userId).confirm= false;
        }
        setRecords(newRecords)
    }

    const modifyRecord=(obj)=>{
        axios.request(
            {
                url:"http://localhost:9080/api/user/modify",
                method:"PUT",
                headers:{
                    "content-type":"application/json",
                    authorization : "Bearer "+userDetails.token.access_token

                },
                data:{
                    "userId":obj.userId,
                    "roleValue":obj.role,
                    "statusValue":obj.status
                }
            }
        ).then(res=>{
            toaster.success("Modified successfully!")
            handleChange(false, obj, "confirm")
        }).catch(err=>{

        })
    }

    const addUser=()=>{
        axios.request(
            {
                method: 'POST',
                headers: { 'content-type': 'application/json',
                            authorization : "Bearer "+userDetails.token.access_token
                },
                data: {
                    "serviceData":{
                        "email":id,
                        "name":name,
                        "role":role,
                        "password":pass
                    }
                },
                url: 'http://localhost:9080/api/user/add'
            }
        ).then(function(res) {
           toaster.success("New Record Added successfully!")
           setShow(false);
           getUsers();
        }).catch(function(err) {
            setErrorDesc(err.response.data.errorDesc)
        });
    }

    const COLUMNS = [
        {
            Header: 'userId',
            Footer: 'userId',
            accessor: 'userID',
        },
        {
            Header: 'Name',
            Footer: 'Name',
            accessor: 'name',
        },
        {
            Header: 'date',
            Footer: 'date',
            accessor: 'date',

        },
        {
            Header: 'role',
            Footer: 'role',
            accessor: 'role'
        },
        {
            Header: 'status',
            Footer: 'status',
            accessor: 'status'
        },
    ]

    const fakeEntries = [
        {
            "userId": "1",
            "name": "Kenna",
            "date": "1985-11-19",
            "role": "Lead",
            "status": "Active",
            "cnf": "true"
        },
        {
            "userId": "86",
            "name": "Korrie",
            "date": "1996-01-16",
            "role": "Developer",
            "status": "Requested",
            "cnf": "1"
        },
        {
            "userId": "96",
            "name": "Petronia",
            "date": "1999-08-20",
            "role": "Developer",
            "status": "Inactive",
            "cnf": "0"
        },
        {
            "userId": "52",
            "name": "Marcy",
            "date": "1992-10-05",
            "role": "Developer",
            "status": "Inactive",
            "cnf": "0"
        },
        {
            "userId": "41",
            "name": "Starla",
            "date": "1986-11-24",
            "role": "Developer",
            "status": "Active",
            "cnf": "0"
        },
        {
            "userId": "55",
            "name": "Aili",
            "date": "1989-12-22",
            "role": "Lead",
            "status": "Requested",
            "cnf": "0"
        }
    ]
    const [data, setValue] = useState(fakeEntries);

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("Select Role");
    const [pass, setPass] = useState("");
    const [confPass, setConfPass] = useState("");

    const onRequest = (event) => {
        event.preventDefault();
        //check if email correct
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(id)) {
            alert("Enter correct Email!!")
        } else if (id.slice(id.lastIndexOf('@') + 1) != "incedoinc.com") {
            alert("Enter official ID!!")
        } else if (role == "Select Role") {
            alert("Please select role!!")
        }else{
            addUser();
        }
    }

    const sortData = (x) => {
        if (x == "userId") {
            setValue(fakeEntries.sort(sortUserID));
        } else if (x == "name") {
            setValue(fakeEntries.sort(sortName));
        } else if (x == "role") {
            setValue(fakeEntries.sort(sortRole));
        } else if (x == "status") {
            setValue(fakeEntries.sort(sortStatus));
        }
    }

    const sortName = (a, b) => {
        var aName = a.name.toLowerCase();
        var bName = b.name.toLowerCase();
        return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
    }

    const sortUserID = (a, b) => {
        var aName = a.userId.toLowerCase();
        var bName = b.userId.toLowerCase();
        return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
    }

    const sortRole = (a, b) => {
        var aName = a.role.toLowerCase();
        var bName = b.role.toLowerCase();
        return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
    }

    const sortStatus = (a, b) => {
        var aName = a.status.toLowerCase();
        var bName = b.status.toLowerCase();
        return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
    }

    const navigate = useNavigate();

    const onLogout = (event) => {
        navigate("/")
    }

    $(document).ready(function () {
        for (let index = 0; index < fakeEntries.length; index++) {
            if (fakeEntries.at(index).status != "Requested") {
                $("#" + fakeEntries.at(index).userId + "btn").prop("disabled", true);
            }
        }

        for (let index = 0; index < fakeEntries.length; index++) {
            if (fakeEntries.at(index).status == "Inactive") {
                $("#" + fakeEntries.at(index).userId + " select").prop("disabled", "disabled");
            }
        }

        $('.uaBtn').prop('disabled', true);
        $(".dF").hide();
        $(".hDash").hide();

        $('.dBtn').on('click', () => {
            $('.dBtn').prop('disabled', true);
            $('.uaBtn').prop('disabled', false);
            $(".uaF").hide();
            $(".dF").show();
        })
        $('.uaBtn').on('click', () => {
            $('.uaBtn').prop('disabled', true);
            $('.dBtn').prop('disabled', false);
            $(".uaF").show();
            $(".dF").hide();
        })

        if (pass != confPass) {
            $('#confP').css('color', 'red')
        } else {
            $('#confP').css('color', 'black')
        }
    });

    return (
        <div className="text-center aS">
            <HeaderAdmin />
            <div className='container uaF'>
                <h1 className="rounded shadow-sm text-center mx-auto my-3 py-2 border border-1 border-dark bg-white">User Administration</h1>
                <table className="table table-bordered mt-3 text-center">
                    <thead>
                        <tr>
                            <th><button className='sortBtn' onClick={() => sortData("userId")}></button>User ID</th>
                            <th><button className='sortBtn' onClick={() => sortData("name")}></button>Name</th>
                            <th><button className='sortBtn' onClick={() => sortData("name")}></button>Active From</th>
                            <th><button className='sortBtn' onClick={() => sortData("role")}></button>Role</th>
                            <th><button className='sortBtn' onClick={() => sortData("status")}></button>Status</th>
                            <th><button className='sortBtn' onClick={() => sortData("name")}></button>Confirm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map(obj => {
                            return <tr className='bg-white' id={obj.userId}>
                                <td>{obj.userId}</td>
                                <td>{obj.name}</td>
                                <td>{obj.activeFrom}</td>
                                <td>{obj.role}</td>
                                <td><select value={obj.status} onChange={(evt)=>handleChange(evt.target.value,obj,"status")} className=' p-1 border-dark fw-bold mx-auto mt-2 border-0 border-bottom LSdd'>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                    <option value="Requested">Requested</option>
                                    <option value="Locked">Locked</option>
                                </select></td>
                                <td><button id={obj.userId + "btn"} onClick={()=>modifyRecord(obj)} disabled={obj.confirm === true && obj.status !== "Requested" && obj.status !== "Locked" ? false: true} className="aTBtn" value={"UserID"}>Confirm</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <button className="aAUBtn" onClick={()=>setShow(true)}>Add User</button>
            </div>

            <Dashboard />

            {/* <Footer /> */}
            <Modal
                show={show}
                onHide={() => {setShow(false); setErrorDesc("")}}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Add New User
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div class="reveal-modal " style={{background:"#cfe2f3",height:"400px"}}>
                    <form className="text-center LSfm w-100 h-100 mt-5">

                        <p style={{background:"red",color:"white"}}>{errorDesc}</p>

                        <input type="email" className=" p-1 border-dark fw-bold mx-auto border-0 border-bottom LSin"
                            placeholder="User ID" value={id} onChange={(data) => setId(data.target.value)} required ></input><br></br>
                        <input type="text" className=" p-1 border-dark fw-bold mx-auto mt-2 border-0 border-bottom LSin"
                            placeholder="Name" value={name} onChange={(data) => setName(data.target.value)} required /><br></br>
                        <input type="password" className=" p-1 border-dark fw-bold mt-2 mx-auto border-0 border-bottom LSin"
                            placeholder="Password" value={pass} onChange={(data) => setPass(data.target.value)} required />
                        <br></br>
                        <input type="password" id='confP' className="p-1 border-dark fw-bold mt-2 mx-auto border-0 border-bottom LSin"
                            placeholder="Confirm Password" value={confPass} onChange={(data) => setConfPass(data.target.value)} required />
                        <br></br>
                        <select className=' p-1 border-dark fw-bold mx-auto mt-2 border-0 border-bottom LSin LSdd' value={role}
                            onChange={(data) => setRole(data.target.value)} required>
                            <option value="Role">Select Role</option>
                            <option value="Lead">Lead</option>
                            <option value="Admin">Admin</option>
                            <option value="Developer">Developer</option>
                        </select><br></br>
                        <button type="submit" className="mt-4 LSbtn" onClick={(event) => onRequest(event)}>Add User
                        </button>
                    </form>
                </div>
            
            </Modal.Body>
             </Modal>

        </div >
    );
}

export default Admin;