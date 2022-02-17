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
        <div className="container">
            <h1 className="rounded shadow text-center mx-auto mt-5 py-2 border border-1 border-dark">AssetMark - Shift Allowance App</h1>
            <div className="rounded shadow text-center p-5 w-50 mx-auto mt-5">
                <input type="email" className="form-control border-dark fw-bold w-auto mx-auto" placeholder="User ID" value={id}
                    onChange={(data) => setId(data.target.value)} required ></input>
                <input type="password" className="form-control border-dark fw-bold mt-2 w-auto mx-auto"
                    placeholder="Password" value={pass} onChange={(data) => setPass(data.target.value)} required />
                <button type="submit" className="btn btn-primary mt-4" onClick={(event) => onLogin(event)}>Login
                </button>
                <hr />
                <div className="d-inline-flex">
                    <p>New User?</p>
                    <p className="text-primary ms-2" id="p-link" onClick={(event) => onRequestAccess(event)}>Request Access</p>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;