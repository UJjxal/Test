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

    const [show, setShow] = useState(false);

    const [errorDesc, setErrorDesc] = useState("");


    useEffect(() => {
        getUsers();
    }, []);


    const getUsers = () => {
        axios.request({
            url: "http://localhost:9080/api/user/view",
            method: "GET",
            headers: {
                authorization: "Bearer " + userDetails.token.access_token
            }
        }).then(res => {
            setRecords(res.data.serviceData);
        }).catch(err => {
            console.log(err)
        })
    }

    const handleChange = (value, obj, property) => {
        const newRecords = JSON.parse(JSON.stringify(records))
        if (property === "status") {
            newRecords.find(rec => rec.userId === obj.userId).status = value;
            newRecords.find(rec => rec.userId === obj.userId).confirm = true;
        } else if (property === "confirm") {
            newRecords.find(rec => rec.userId === obj.userId).confirm = false;
        }
        setRecords(newRecords)
    }

    const modifyRecord = (obj) => {
        axios.request(
            {
                url: "http://localhost:9080/api/user/modify",
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer " + userDetails.token.access_token

                },
                data: {
                    "userId": obj.userId,
                    "roleValue": obj.role,
                    "statusValue": obj.status
                }
            }
        ).then(res => {
            toaster.success("Modified successfully!")
            handleChange(false, obj, "confirm")
        }).catch(err => {

        })
    }

    const addUser = () => {
        axios.request(
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: "Bearer " + userDetails.token.access_token
                },
                data: {
                    "serviceData": {
                        "email": id,
                        "name": name,
                        "role": role,
                        "password": pass
                    }
                },
                url: 'http://localhost:9080/api/user/add'
            }
        ).then(function (res) {
            toaster.success("New Record Added successfully!")
            setShow(false);
            getUsers();
        }).catch(function (err) {
            setErrorDesc(err.response.data.errorDesc)
        });
    }

    const COLUMNS = [
        {
            Header: 'User ID',
            Footer: 'userId',
            accessor: 'userId',
        },
        {
            Header: 'Name',
            Footer: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Date',
            Footer: 'date',
            accessor: 'date',

        },
        {
            Header: 'Role',
            Footer: 'role',
            accessor: 'role'
        },
        {
            Header: 'Status',
            Footer: 'Status',
            accessor: 'status',

        },
    ]

    const DATA = [
        {
            "userId": "9392",
            "name": "Viki",
            "date": "10-07-2021",
            "role": "Admin",
            "status": "Active"
        },
        {
            "userId": "6099",
            "name": "Correy",
            "date": "27-08-2006",
            "role": "Admin",
            "status": "Active"
        },
        {
            "userId": "7408",
            "name": "Lonnie",
            "date": "25-03-1997",
            "role": "Admin",
            "status": "Inactive"
        },
        {
            "userId": "5204",
            "name": "Lila",
            "date": "07-06-2017",
            "role": "Admin",
            "status": "Inactive"
        },
        {
            "userId": "2726",
            "name": "Hildegaard",
            "date": "21-05-1991",
            "role": "Developer",
            "status": "Active"
        },
        {
            "userId": "1476",
            "name": "Tiffie",
            "date": "25-01-1984",
            "role": "Lead",
            "status": "Active"
        },
        {
            "userId": "9386",
            "name": "Emilia",
            "date": "02-03-1980",
            "role": "Admin",
            "status": "Active"
        },
        {
            "userId": "4156",
            "name": "Vanessa",
            "date": "04-10-1989",
            "role": "Developer",
            "status": "Active"
        },
        {
            "userId": "2807",
            "name": "Kalina",
            "date": "15-01-2008",
            "role": "Lead",
            "status": "Requested"
        },
        {
            "userId": "1476",
            "name": "Emilia",
            "date": "19-03-2015",
            "role": "Admin",
            "status": "Inactive"
        },
        {
            "userId": "9397",
            "name": "Aryn",
            "date": "02-08-1993",
            "role": "Developer",
            "status": "Inactive"
        },
        {
            "userId": "1653",
            "name": "Emelina",
            "date": "05-03-2016",
            "role": "Admin",
            "status": "Requested"
        },
        {
            "userId": "7622",
            "name": "Zsa Zsa",
            "date": "16-04-1983",
            "role": "Lead",
            "status": "Requested"
        },
        {
            "userId": "9216",
            "name": "Joelly",
            "date": "16-02-1995",
            "role": "Admin",
            "status": "Requested"
        },
        {
            "userId": "8881",
            "name": "Louella",
            "date": "25-11-2000",
            "role": "Lead",
            "status": "Active"
        },
        {
            "userId": "5066",
            "name": "Robbi",
            "date": "19-03-1988",
            "role": "Developer",
            "status": "Requested"
        },
        {
            "userId": "2987",
            "name": "Xylina",
            "date": "20-02-1989",
            "role": "Lead",
            "status": "Inactive"
        },
        {
            "userId": "7739",
            "name": "Cherilyn",
            "date": "12-01-1987",
            "role": "Developer",
            "status": "Active"
        },
        {
            "userId": "141",
            "name": "Fawne",
            "date": "29-08-1997",
            "role": "Admin",
            "status": "Active"
        }
    ]

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => DATA, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        state,
        gotoPage,
        pageCount,
        setPageSize,
        prepareRow
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 }
        },
        usePagination
    )

    const { pageIndex, pageSize } = state
    // const [data, setValue] = useState(DATA);

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("Select Role");
    const [pass, setPass] = useState("");
    const [confPass, setConfPass] = useState("");

    const onRequest = (event) => {
        event.preventDefault();
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        if (!regex.test(id)) {
            alert("Enter correct Email!!")
        } else if (id.slice(id.lastIndexOf('@') + 1) != "incedoinc.com") {
            alert("Enter official ID!!")
        } else if (!strongPassword.test(pass)) {
            alert("Password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters")
            $('.wpM').show();
        } else if (role == "Select Role") {
            alert("Please select role!!")
        } else {
            addUser();
        }
    }



    const navigate = useNavigate();

    const onLogout = (event) => {
        navigate("/")
    }

    $(document).ready(function () {

        $('.delBtn').hide();

        for (let index = 0; index < DATA.length; index++) {
            if (DATA.at(index).status != "Requested") {
                $("#" + DATA.at(index).userId + "btn").prop("disabled", true);
            }
        }

        for (let index = 0; index < DATA.length; index++) {
            if (DATA.at(index).status == "Inactive") {
                $("#" + DATA.at(index).userId + " select").prop("disabled", "disabled");
                $("#" + DATA.at(index).userId + "btnD").show();
            }
        }

        if (pass != confPass) {
            $('#confP').css('color', 'red')
        } else {
            $('#confP').css('color', 'black')
        }
        $('.wpM').hide();

        $('.uaBtn').prop('disabled', true);
        $(".Dashboard").hide();
        $(".hDash").hide();
        $(".ft1").hide();

        $('.dBtn').on('click', () => {
            $('.dBtn').prop('disabled', true);
            $('.uaBtn').prop('disabled', false);
            $(".uaF").hide();
            $(".Dashboard").show();
        })

        $('.uaBtn').on('click', () => {
            $('.uaBtn').prop('disabled', true);
            $('.dBtn').prop('disabled', false);
            $(".uaF").show();
            $(".Dashboard").hide();
        })

        $('.aAUBtn').on('click', () => {
            document.body.style.overflow = "hidden";
        })

        $('.AUC').on('click', () => {
            document.body.style.overflow = "auto";
        })
    });

    return (
        <div className="text-center aS">
            <HeaderAdmin />
            <div className='container uaF'>
                <h1 className="rounded shadow-sm text-center mx-auto my-3 py-2 border border-1 border-dark bg-white">User Administration</h1>
                <table className="table table-bordered mt-3 text-center">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Active From</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Confirm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map(obj => {
                            return <tr className='bg-white' id={obj.userId}>
                                <td>{obj.userId}</td>
                                <td>{obj.name}</td>
                                <td>{obj.activeFrom}</td>
                                <td>{obj.role}</td>
                                {/* <select className=' p-1 border-dark fw-bold mx-auto mt-2 border-0 border-bottom LSdd'>
                                    <option value={obj.status} >{obj.status}</option>
                                    <option value="Lead">Active</option>
                                    <option value="Admin">Inactive</option>
                                    <option value="Developer">Requested</option>
                                </select>
                                <td className='btnCol'>
                                    <button id={obj.userId + "btn"} className="aTBtn" value={"UserID"}>Confirm</button>
                                    <button id={obj.userId + "btnD"} className="aTBtn mt-2 bg-danger delBtn" value={"UserID"}>Delete</button>
                                </td> */}
                                <td><select value={obj.status} onChange={(evt) => handleChange(evt.target.value, obj, "status")} className=' p-1 border-dark fw-bold mx-auto mt-2 border-0 border-bottom LSdd'>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                    <option value="Requested">Requested</option>
                                    <option value="Locked">Locked</option>
                                </select></td>
                                <td><button id={obj.userId + "btn"} onClick={() => modifyRecord(obj)} disabled={obj.confirm === true && obj.status !== "Requested" && obj.status !== "Locked" ? false : true} className="aTBtn" value={"UserID"}>Confirm</button></td>
                            </tr >
                        })}
                    </tbody >
                </table >
                {/* <a href="#container" className="aAUBtn mt-2 mb-4">Add User</a> */}
                <button className="aAUBtn mt-2 mb-4" onClick={() => setShow(true)}>Add User</button>
            </div >

            <Dashboard />

            {/* <Footer />
            <div id="container">
                <div class="reveal-modal ">
                    <form className="text-center w-100 mt-5 AUBE">
                        <div className='rounded p-4 AUB mx-auto'>
                            <input type="email" className=" p-1 border-dark fw-bold mx-auto border-0 border-bottom LSin"
                                placeholder="Email ID" value={id} onChange={(data) => setId(data.target.value)} required ></input><br></br>
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
                            <a href="#" className='LSbtn ms-3 AUC'>Cancel</a>
                        </div>
                    </form>
                </div>
            </div>
        </div > */}
            <Footer />
            <Modal
                show={show}
                onHide={() => { setShow(false); setErrorDesc("") }}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Add New User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="reveal-modal">
                        <form className="text-center w-100 mt-5 AUBE">
                            <div className='rounded p-4 AUB mx-auto'>
                                <p style={{ background: "red", color: "white" }}>{errorDesc}</p>
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
                            </div>
                        </form>
                    </div>

                </Modal.Body>
            </Modal>

        </div >
    );
}

export default Admin;