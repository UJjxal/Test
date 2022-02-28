import $ from 'jquery'
import { useNavigate, useLocation } from "react-router";
import { useEffect, useState, useMemo } from 'react';
import HeaderAdmin from '../Components/HeaderAdmin';
import Footer from '../Components/Footer';
import Dashboard from './Dashboard';
import Table from './Table';
import axios from 'axios';
import { toaster } from 'evergreen-ui';
import Modal from 'react-bootstrap/Modal';
import { useTable, usePagination } from 'react-table'

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
            accessor: 'activeFrom',

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
            Cell: ({ cell }) => (
                <select value={cell.row.values.status} onChange={(evt) => handleChange(evt.target.value, cell.row.values, "status")} className=' p-1 border-dark fw-bold mx-auto border-1 rounded border-bottom LSdd'>
                    <option value={cell.row.values.status}>{cell.row.values.status}</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            )
        },
        {
            Header: 'Action',
            Footer: 'Status',
            Cell: ({ cell }) => (
                <div>
                    <button id={cell.row.values.userId + "btn"} onClick={() => modifyRecord(cell.row.values)} disabled={cell.row.values.confirm === true && cell.row.values.status !== "Requested" && cell.row.values.status !== "Locked" ? false : true} className="aTBtn" value={"UserID"}>Confirm</button>
                    <br></br>
                    <button id={cell.row.values.userId + "btnD"} className="aTBtn mt-2 bg-danger delBtn" value={"UserID"} hidden={cell.row.values.status != 'Inactive'}>Delete</button>
                </div>
            )
        },
    ]

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => records, [])

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

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("Select Role");
    const [pass, setPass] = useState("");
    const [confPass, setConfPass] = useState("");

    const onRequest = (event) => {
        event.preventDefault();
        //check if email correct
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        if (id == '') {
            $('.errorMSG').text("Please Enter Email ID").animate({ opacity: '1' }, "slow");
            setTimeout(function () {
                $('.errorMSG').animate({ opacity: '0' }, "slow");
            }, 3000);
        } else if (name == '') {
            $('.errorMSG').text("Please Enter Name").animate({ opacity: '1' }, "slow");
            setTimeout(function () {
                $('.errorMSG').animate({ opacity: '0' }, "slow");
            }, 3000);
        } else if (pass == '') {
            $('.errorMSG').text("Please Enter Password").animate({ opacity: '1' }, "slow");
            setTimeout(function () {
                $('.errorMSG').animate({ opacity: '0' }, "slow");
            }, 3000);
        } else if (pass != confPass) {
            $('.errorMSG').text("Password Does Not Match").animate({ opacity: '1' }, "slow");
            setTimeout(function () {
                $('.errorMSG').animate({ opacity: '0' }, "slow");
            }, 3000);
        } else if (!regex.test(id)) {
            $('.errorMSG').text("Please Enter Valid Email ID").animate({ opacity: '1' }, "slow");
            setTimeout(function () {
                $('.errorMSG').animate({ opacity: '0' }, "slow");
            }, 3000);
        } else if (id.slice(id.lastIndexOf('@') + 1) != "incedoinc.com") {
            $('.errorMSG').text("Please Enter official ID").animate({ opacity: '1' }, "slow");
            setTimeout(function () {
                $('.errorMSG').animate({ opacity: '0' }, "slow");
            }, 3000);
        } else if (!strongPassword.test(pass)) {
            $('.errorMSG').text("Password must contain at least 8 characters, at least 1 number and both lowercase and uppercase letters and special characters!").animate({ opacity: '1' }, "slow");
            setTimeout(function () {
                $('.errorMSG').animate({ opacity: '0' }, "slow");
            }, 3000);
        } else if (role == "Select Role") {
            $('.errorMSG').text("Please Select A Role").animate({ opacity: '1' }, "slow");
            setTimeout(function () {
                $('.errorMSG').animate({ opacity: '0' }, "slow");
            }, 3000);
        } else {
            addUser();
        }
    }

    const navigate = useNavigate();

    const onLogout = (event) => {
        navigate("/")
    }

    $(document).ready(function () {
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

    });

    return (
        <div className="text-center aS">
            <HeaderAdmin />
            <div className='container uaF'>
                <h1 className="rounded shadow-sm text-center mx-auto my-3 py-2 border border-1 border-dark bg-white">User Administration</h1>
                {/* <table className="table table-bordered mt-3 text-center " {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map(row => {
                            prepareRow(row)
                            return (
                                <tr className='bg-white' {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className='tBtns'>
                    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className='LSbtn'>{'ᐸᐸ'}</button>
                    <button onClick={() => previousPage()} disabled={!canPreviousPage} className='LSbtn'>Previous</button>
                    <button onClick={() => nextPage()} disabled={!canNextPage} className='LSbtn'>Next</button>
                    <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className='LSbtn'>{'ᐳᐳ'}</button>
                    <span className='mx-2'>
                        Page
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>
                    </span>
                    <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))} className='LSbtn'>
                        {[10, 25, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize} >
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
 */}

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
                                <td><select value={obj.status} onChange={(evt) => handleChange(evt.target.value, obj, "status")} className=' p-1 border-dark fw-bold mx-auto border-1 rounded border-bottom LSdd'>
                                    <option value={obj.status}>{obj.status}</option>
                                    <option value="Active" hidden={obj.status == 'Active'}>Active</option>
                                    <option value="Inactive" hidden={obj.status == 'Inactive'}>Inactive</option>
                                </select></td>
                                <td>
                                    <button id={obj.userId + "btn"} onClick={() => modifyRecord(obj)} disabled={obj.confirm === true && obj.status !== "Requested" && obj.status !== "Locked" ? false : true} className="aTBtn" value={"UserID"}>Confirm</button>
                                    <br></br>
                                    <button id={obj.userId + "btnD"} className="aTBtn mt-2 bg-danger delBtn" value={"UserID"} hidden={obj.status != 'Inactive'}>Delete</button>
                                </td>
                            </tr >
                        })}
                    </tbody >
                </table >
                <button className="aAUBtn mt-2 mb-4" onClick={() => setShow(true)}>Add User</button>
            </div >

            <Dashboard />

            <Footer />
            <Modal
                show={show}
                onHide={() => { setShow(false); setErrorDesc("") }}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title" className='mt-5'>
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Add New User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="reveal-modal">
                        <form className="text-center w-100 AUBE">
                            <div className='rounded mx-auto'>
                                <p style={{ background: "red", color: "white" }}>{errorDesc}</p>
                                <input type="email" className=" p-1 border-dark fw-bold mx-auto border-2 border-bottom LSin"
                                    placeholder="User ID" value={id} onChange={(data) => setId(data.target.value)} required ></input><br></br>
                                <input type="text" className=" p-1 border-dark fw-bold mx-auto mt-2 border-2 border-bottom LSin"
                                    placeholder="Name" value={name} onChange={(data) => setName(data.target.value)} required /><br></br>
                                <input type="password" className=" p-1 border-dark fw-bold mt-2 mx-auto border-2 border-bottom LSin"
                                    placeholder="Password" value={pass} onChange={(data) => setPass(data.target.value)} required />
                                <br></br>
                                <input type="password" id='confP' className="p-1 border-dark fw-bold mt-2 mx-auto border-2 border-bottom LSin"
                                    placeholder="Confirm Password" value={confPass} onChange={(data) => setConfPass(data.target.value)} required />
                                <br></br>
                                <select className=' p-1 border-dark fw-bold mx-auto mt-2 border-2 border-bottom LSin LSdd ' style={{ width: "262px" }} value={role}
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