import $ from 'jquery'
import { Component } from 'react';
import { useNavigate } from "react-router";
import { useState } from 'react';

class Admin extends Component {

    constructor() {
        super();
        this.state = {
            fakeEntries: [
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
                    "status": "Pending",
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
                    "status": "Pending",
                    "cnf": "0"
                }
            ],
        }
    }

    componentDidMount() {
        for (let index = 0; index < this.state.fakeEntries.length; index++) {
            if (this.state.fakeEntries.at(index).status != "Pending") {
                $("#" + this.state.fakeEntries.at(index).userId + "btn").prop("disabled", true);
            }
        }
        const sortItem = (a, b) => {
            var aName = a.name.toLowerCase();
            var bName = b.name.toLowerCase();
            return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
        }
        this.state.fakeEntries = this.state.fakeEntries.sort(sortItem);
    }

    componentDidUpdate(prevProps, prevState) {

    }

    render() {

        //const navigate = useNavigate();

        const onLogout = (event) => {
            //navigate("/")
        }

        return (
            <div className="container text-center">
                <h1 className="rounded shadow-sm text-center mx-auto my-3 py-2 border border-1 border-dark">User Administration</h1>
                <div className="infoBar d-flex px-3 py-2">
                    <p className='mb-0'>Name</p>|<p className='mb-0'>User ID</p>
                    <button className='ms-auto btn btn-danger px-1 py-0' onClick={(data) => { onLogout(data.target.value) }}>Logout</button>
                </div>
                <table className="table table-bordered mt-3 text-center">
                    <thead className='table-dark'>
                        <tr>
                            <td>User ID</td>
                            <td >Name</td>
                            <td>Active From</td>
                            <td>Role</td>
                            <td>Status</td>
                            <td>Confirm</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.fakeEntries.map(obj => {
                            return <tr>
                                <td>{obj.userId}</td>
                                <td>{obj.name}</td>
                                <td>{obj.date}</td>
                                <td>{obj.role}</td>
                                <select className=' p-1 border-dark fw-bold mx-auto mt-2 border-0 border-bottom  LSdd'>
                                    <option value={obj.status} >{obj.status}</option>
                                    <option value="Lead">Active</option>
                                    <option value="Admin">Inactive</option>
                                    <option value="Developer">Pending</option>
                                </select>
                                <td><button id={obj.userId + "btn"} className="btn btn-primary Abtn" value={"UserID"}>Confirm</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <button className="btn btn-primary Abtn" >Add User</button>
            </div>
        );
    }
}

export default Admin;