import React, { useState } from 'react';
import { useNavigate } from "react-router";
import Header from '../Components/Header';
import Footer from '../Components/Footer';

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

    return (
        <div>
            <div className="container dF">
                <h1 className="rounded shadow-sm text-center mx-auto my-3 py-2 border border-1 border-dark bg-white">Allowance Dashboard</h1>
                <div className="row mt-3 dSel">
                    <div className="col text-center">
                        <h6>Project</h6>
                        <select className="p-1 mx-auto Ddd text-center Ds">
                            <option value={""} disabled>--- Select Project  ---</option>
                            <option value={"Digital"}>Digital</option>
                            <option value={"Enterprise Platforms"}>Enterprise Platforms</option>
                            <option value={"CET"}>CET</option>
                            <option value={"Data"}>Data</option>
                        </select>
                    </div>
                    <div className="col text-center">
                        <h6>Time Period</h6>
                        <select className="p-1 mx-auto Ddd text-center Ds">
                            <option >February 2022</option>
                            <option >January 2022</option>
                            <option >December 2021</option>
                            <option >November 2021</option>
                            <option >October 2021</option>
                        </select>
                    </div>
                </div>
                <table className="table table-bordered mt-3 text-center">
                    <thead>
                        <tr>
                            <th>Name</th>
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
                            return <tr className='bg-white'>
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
                    <button className="mainBtn">
                        Approve & Download
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}