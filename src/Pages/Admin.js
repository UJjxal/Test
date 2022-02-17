function Admin() {

    const onConfirm = (event) => {

    }

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
            "status": "Pending",
            "cnf": "1"
        },
        {
            "userId": "96",
            "name": "Petronia",
            "date": "1999-08-20",
            "role": "Developer",
            "status": "Active",
            "cnf": "0"
        },
        {
            "userId": "52",
            "name": "Marcy",
            "date": "1992-10-05",
            "role": "Developer",
            "status": "Active",
            "cnf": "0"
        },
        {
            "userId": "41",
            "name": "Starla",
            "date": "1986-11-24",
            "role": "Developer",
            "status": "Pending",
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

    return (
        <div className="container text-center">
            <h1 className="rounded shadow-sm text-center mx-auto my-3 py-2 border border-1 border-dark">User Administration</h1>
            <table className="table table-hover table-bordered mt-5">
                <thead>
                    <tr>
                        <td>User ID</td>
                        <td>Name</td>
                        <td>Active From</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td></td>
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
                            <td><button value={"UserID"} onClick={(data) => { onConfirm(data.target.value) }}>Confirm</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
            <button className="btn btn-primary">Add</button>
        </div>
    )
}

export default Admin;