import React, { useState } from "react";
import {Link} from 'react-router-dom';

function LoginScreen() {
    const [id, setId] = useState("");
    const [pass, setPass] = useState("");

    const onLogin = (event) => {
        event.preventDefault();
        fetch("http://localhost:808")
        
    }

    const onRequestAccess = (event) => {
        event.preventDefault();

    }

    return (
        <div className="container">
            <h2 className="rounded shadow text-center mx-auto my-5 py-2 border border-1 border-dark">AssetMark - Shift Allowance App</h2>
            <br></br>
            <div className="rounded shadow text-center p-5  mx-auto mt-2 w-400px">
                <input type="email" className="form-control border-dark fw-bold w-auto mx-auto" placeholder="User ID" value={id}
                    onChange={(data) => setId(data.target.value)} required ></input>
                <input type="password" className="form-control border-dark fw-bold mt-2 w-auto mx-auto"
                    placeholder="Password" value={pass} onChange={(data) => setPass(data.target.value)} required />
                <button type="submit" className="btn btn-primary mt-4" onClick={(event) => onLogin(event)}>Login
                </button>
                <hr />
                <div className="d-inline-flex ">
                    <p className="mb-0">New User ?</p>
                    <Link to="/RequestAccess"> Request Access</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;