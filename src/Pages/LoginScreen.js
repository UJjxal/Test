import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";

function LoginScreen() {
    const navigate = useNavigate();

    const [id, setId] = useState("");
    const [pass, setPass] = useState("");

    const onRequestAccess = (event) => {
        event.preventDefault();

    }

    const onLogin = (event) => {
        event.preventDefault();

        //check if email correct
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(id)) {
            alert("Enter correct Email!!!")
        } else {
            //check access level
            if (id != "admin@gmail.com") {
                navigate("/Dashboard");
            } else {
                navigate("/Admin")
            }
            //
        }
        //
    }


    return (
        <div className="container">
            <h2 className="rounded shadow text-center mx-auto my-5 py-2 border border-1 border-dark">AssetMark - Shift Allowance App</h2>
            <br></br>
            <form className="rounded shadow text-center p-5 w-400px mx-auto">
                <input type="email" className=" inputBox form-control border-dark fw-bold mx-auto" placeholder="User ID" value={id}
                    onChange={(data) => setId(data.target.value)} required ></input>
                <input type="password" className="inputBox form-control border-dark fw-bold mt-2 mx-auto"
                    placeholder="Password" value={pass} onChange={(data) => setPass(data.target.value)} required />
                <button type="submit" className="btn btn-primary mt-4" onClick={(event) => onLogin(event)}>Login
                </button>
                <hr />
                <div className="d-inline-flex ">
                    <p className="mb-0">New User?</p>
                    <Link to="/RequestAccess" className="ms-1">Request Access</Link>
                </div>
            </form>
        </div>
    );
}

export default LoginScreen;