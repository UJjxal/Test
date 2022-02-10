import {useState } from 'react';


export default function RequestAccess(){

    
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("Lead");

    const onRequest=(event)=>{
        event.preventDefault();
        alert(`New Request(${id}, ${name}, ${role}) has been created successfully!!`);
    }
    return (
        <div>
            <form>
                <tr>
                    <td>User Id:</td>
                    <td><input type="email" value={id} onChange={(data)=>setId(data.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Name:</td>
                    <td><input type="text" value={name} onChange={(data)=>setName(data.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Role:</td>
                    <td><select value={role} onChange={(data)=>setRole(data.target.value)}>
                        <option value="Lead">Lead</option>
                        <option value="Admin">Admin</option>
                        <option value="Developer">Developer</option>
                    </select></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button onClick={(event)=>onRequest(event)}>Request</button></td>
                </tr>
            </form>
        </div>
    );
}