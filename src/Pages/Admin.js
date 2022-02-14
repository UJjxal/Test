function Admin() {

    const onConfirm = (event) => {

    }

    return (
        <div>
            <h1 className="border border-2 border-dark">User Administration</h1>
            <table>
                <tr>
                    <td>User ID</td>
                    <td>Name</td>
                    <td>Active From</td>
                    <td>Role</td>
                    <td>Status</td>
                    <td></td>
                </tr>
                <tr>
                    <td>abcd</td>
                    <td>ABC DEF</td>
                    <td>10/01/2021</td>
                    <td>Lead</td>
                    <td>Active</td>
                    <td><button value={"UserID"} onClick={(data) => { onConfirm(data.target.value) }}>Confirm</button></td>
                </tr>
                <tr>
                    <td>efgh</td>
                    <td>GHI JKL</td>
                    <td>10/10/2020</td>
                    <td>Developer</td>
                    <td>Requested</td>
                    <td><button value={"UserID"} onClick={(data) => { onConfirm(data.target.value) }}>Confirm</button></td>
                </tr>
            </table>
            <button>Add</button>
        </div>
    )
}

export default Admin;