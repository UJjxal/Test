import $ from 'jquery'
import { useNavigate } from "react-router";

function Admin() {

    const navigate = useNavigate();


    const onConfirm = (event) => {

    }

    const onLogout = (event) => {
        navigate("/")
    }

    let fakeEntries = [
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
    ];

    $(document).ready(function () {
        for (let index = 0; index < fakeEntries.length; index++) {
            if (fakeEntries.at(index).status != "Pending") {
                $("#" + fakeEntries.at(index).userId + "btn").prop("disabled", true);
            }
        }
    });

    const sortName = () => {
        fakeEntries = fakeEntries.sort(sortItem);
    }

    function sortItem(a, b) {
        var aName = a.name.toLowerCase();
        var bName = b.name.toLowerCase();
        return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
    }

    return (
        <div className="container">
            <h1 className="rounded shadow-sm text-center mx-auto my-3 py-2 border border-1 border-dark">User Administration</h1>
            <div className="infoBar d-flex px-3 py-2">
                <p className='mb-0'>Name</p>|<p className='mb-0'>User ID</p>
                <button className='ms-auto btn btn-danger px-1 py-0' onClick={(data) => { onLogout(data.target.value) }}>Logout</button>
            </div>
            <table className="table table-hover table-bordered mt-3 table-striped text-center">
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
                    {fakeEntries.map(obj => {
                        return <tr>
                            <td>{obj.userId}</td>
                            <td>{obj.name}</td>
                            <td>{obj.date}</td>
                            <td>{obj.role}</td>
                            <td>{obj.status}</td>
                            <td><button id={obj.userId + "btn"} className="btn btn-primary" value={"UserID"} onClick={(data) => { onConfirm(data.target.value) }}>Confirm</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={() => sortName()}>Add</button>
        </div>
    )
}

export default Admin;