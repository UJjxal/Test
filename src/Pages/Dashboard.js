import React, { useState } from 'react';
import { useNavigate } from "react-router";

import DateRangePicker from '@wojtekmaj/react-daterange-picker';

export default function Dashboard() {
    const navigate = useNavigate();

    const fakeEntries = [
        {
            "name": "abc", "sapId": "xxxxx", "projectHours": 160, "leaveHours": 0, "afternoonShiftDays": 20,
            "nightShiftDays": 0, "daysEligibleTA": 20, "transportAllowance": 3000, "totalAllowance": 6000
        },
        {
            "name": "xyz", "sapId": "yyyyy", "projectHours": 120, "leaveHours": 40, "afternoonShiftDays": 10,
            "nightShiftDays": 5, "daysEligibleTA": 13, "transportAllowance": 1950, "totalAllowance": 5200
        }, {
            "name": "xyz", "sapId": "yyyyy", "projectHours": 120, "leaveHours": 40, "afternoonShiftDays": 10,
            "nightShiftDays": 5, "daysEligibleTA": 13, "transportAllowance": 1950, "totalAllowance": 5200
        }, {
            "name": "xyz", "sapId": "yyyyy", "projectHours": 120, "leaveHours": 40, "afternoonShiftDays": 10,
            "nightShiftDays": 5, "daysEligibleTA": 13, "transportAllowance": 1950, "totalAllowance": 5200
        }, {
            "name": "xyz", "sapId": "yyyyy", "projectHours": 120, "leaveHours": 40, "afternoonShiftDays": 10,
            "nightShiftDays": 5, "daysEligibleTA": 13, "transportAllowance": 1950, "totalAllowance": 5200
        },
    ];

    const onLogout = (event) => {
        navigate("/")
    }

    const [value, onChange] = useState([new Date(), new Date()]);

    return (
        <div className="container">
            <h1 className="rounded shadow-sm text-center mx-auto my-3 py-2 border border-1 border-dark">Allowance Dashboard</h1>
            <div className="infoBar d-flex px-3 py-2">
                <p className='mb-0'>Name</p>|<p className='mb-0'>User ID</p>
                <button className='ms-auto btn btn-danger px-1 py-0' onClick={(data) => { onLogout(data.target.value) }}>Logout</button>
            </div>
            <div className="row mt-3">
                <div className="col text-center">
                    <h6>Project</h6>
                    <select className="form-control w-50 mx-auto text-center">
                        <option value={""} disabled>--- Select Project  ---</option>
                        <option value={"Digital"}>Digital</option>
                        <option value={"Enterprise Platforms"}>Enterprise Platforms</option>
                        <option value={"CET"}>CET</option>
                        <option value={"Data"}>Data</option>
                    </select>
                </div>
                <div className="col text-center">
                    <h6>Time Period</h6>
                    <DateRangePicker className="drp mx-auto text-center" onChange={onChange} value={value} />
                </div>
            </div>
            
            <table className="table table-hover table-bordered mt-3 table-striped">
                <thead className='table-dark'>
                    <tr>
                        <th >Name</th>
                        <th>SAP ID</th>
                        <th>Project Hours</th>
                        <th>Holiday/Leave Hours</th>
                        <th>Afternoon Shift Days</th>
                        <th>Night Shift Days</th>
                        <th>Days eligible for TA</th>
                        <th>Transport Allowance</th>
                        <th>Total Allowance</th>
                    </tr>
                </thead>
                <tbody>
                    {fakeEntries.map(obj => {
                        return <tr>
                            <td>{obj.name}</td>
                            <td>{obj.sapId}</td>
                            <td>{obj.projectHours}</td>
                            <td>{obj.leaveHours}</td>
                            <td>{obj.afternoonShiftDays}</td>
                            <td>{obj.nightShiftDays}</td>
                            <td>{obj.daysEligibleTA}</td>
                            <td>{obj.transportAllowance}</td>
                            <td>{obj.totalAllowance}</td>
                        </tr>
                    })}
                </tbody>
            </table>

            <br />
            <div className="text-center">
                <button className="btn btn-primary">
                    Approve & Download
                </button>
            </div>
        </div>
    );
}