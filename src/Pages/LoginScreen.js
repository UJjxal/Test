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
        }
    }

    return (
        <div className="LSmain">
            <img src="./background.jpg" className="position-fixed bgImg "></img>
            <form className="rounded shadow px-5 py-3 mx-5 bg-white LSform">
                <p className="w-auto fw-bold LScT">AssetMark - Shift Allowance</p>
                <p className="text-center LSsT mb-5">Sign In</p>
                <br></br>
                <input type="email" className=" inputBox form-control border-dark fw-bold mx-auto mt-5" placeholder="User ID" value={id}
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