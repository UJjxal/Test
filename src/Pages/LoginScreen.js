import React, { useState } from "react";

function LoginScreen() {
    const [id, setId] = useState("");
    const [pass, setPass] = useState("");

    const onLogin = (event) => {
        event.preventDefault();

    }

    const onRequestAccess = (event) => {
        event.preventDefault();

    }

    return (
        <div className="">
            <div className="">
                <h1 className="">AssetMark - Shift Allowance App</h1>
            </div>
            <form className="">
                <tr>
                    <td className="">User ID:</td>
                    <td><input type="email" value={id} onChange={(data) => setId(data.target.value)} required /></td>
                </tr>
                <tr>
                    <td className="">Password:</td>
                    <td><input type="password" value={pass} onChange={(data) => setPass(data.target.value)} required /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button onClick={(event) => onLogin(event)}>Login</button></td>
                </tr>
            </form>
            <p className="d-flex">New User?<a onClick={(event) => onRequestAccess(event)}>Request Access</a></p>
        </div>

    );
}

export default LoginScreen;