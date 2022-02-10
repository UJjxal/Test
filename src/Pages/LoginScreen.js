//TODO UJjwal
import React, { useState } from "react";
function LoginScreen(){
    const [id, setId] = useState("");
    const [pass, setPass] = useState("");

    const onRequest = (event) => {
        event.preventDefault();
        
    }

    return (
        <div className="">
            <div className="">
                <h1 className="">AssetMark - Shift Allowance App</h1>
            </div>
            <form className="">
                <tr>
                    <td className="">User Id:</td>
                    <td><input type="email" value={id} onChange={(data) => setId(data.target.value)} required /></td>
                </tr>
                <tr>
                    <td className="">Password:</td>
                    <td><input type="password" value={pass} onChange={(data) => setPass(data.target.value)} required /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button class="" onClick={(event) => onRequest(event)}>Login</button></td>
                </tr>
            </form>
            <p>New User? Request Access</p>
        </div>

    );
}

export default LoginScreen;