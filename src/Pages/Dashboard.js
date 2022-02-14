//TODO Shubham
export default function Dashboard(){

    const fakeEntries = [
        {"name":"abc", "sapId":"xxxxx", "projectHours":160, "leaveHours":0,"afternoonShiftDays":20,
         "nightShiftDays":0, "daysEligibleTA":20, "transportAllowance":3000, "totalAllowance":6000},
        {"name":"xyz", "sapId":"yyyyy", "projectHours":120, "leaveHours":40,"afternoonShiftDays":10,
         "nightShiftDays":5, "daysEligibleTA":13, "transportAllowance":1950, "totalAllowance":5200}, 
    ];

    return(
        <div className="container">
            <h1 className=" border border-dark border-2 text-center">Allowance Dashboard</h1>
            
            <div className="row">
                <div className="col">
                    Project:
                    <select className="form-control w-auto">
                    <option value={""} disabled>--- Select Project  ---</option>
                    <option value={"Digital"}>Digital</option>
                    <option value={"Enterprise Platforms"}>Enterprise Platforms</option>
                    <option value={"CET"}>CET</option>
                    <option value={"Data"}>Data</option>
                </select>
                </div>
                <div className="col">
                    Time Period: 
                    <select className="form-control w-auto">
                    <option value={""} disabled> --- Start date - End date ---</option>
                    <option value={""}>10 Jan, 2021 - 20 Mar, 2021</option>
                    <option value={""}>15 Oct, 2021 - 20 Dec, 2021</option>
                    <option value={""}>10 Jan, 2022 - 10 Apr, 2022</option>
                </select>
                </div>
            </div>

            <br/>

            <table className="table table-hover table-bordered">
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
                    {fakeEntries.map(obj=>{
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

            <br/>
            <div className="text-center">
                <button className="btn btn-info">
                    Approve & Download
                </button>
            </div>
        </div>
    );
}