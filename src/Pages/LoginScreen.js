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
        } else if (id.slice(id.lastIndexOf('@') + 1) != "incedoinc.com") {
            alert("Enter official ID")
        } else {
            if (id != "admin@incedoinc.com") {
                navigate("/Dashboard");
            } else {
                navigate("/Admin")
            }
        }
    }

    return (
        <div className="LSmain py-5">
            {/* <img src="./background.jpg" className="position-fixed bgImg "></img> */}
            <div className="rounded shadow px-5 pt-3 pb-0 mx-5 bg-white LSdiv h-100">
                <p className="w-auto fw-bold LScT">AssetMark - Shift Allowance</p>
                <form className="text-center LSfm">
                    <p className="text-center LSsT">Sign In</p>
                    <p className="w-25 mx-auto LSdes">Hello there! Sign in and start managing your shift Allowance</p>
                    <br></br>
                    <input type="email" className=" p-1 border-dark fw-bold mx-auto mt-3 border-0 border-bottom LSin" placeholder="User ID" value={id}
                        onChange={(data) => setId(data.target.value)} required ></input><br></br>
                    <input type="password" className=" p-1 border-dark fw-bold mt-2 mx-auto border-0 border-bottom LSin"
                        placeholder="Password" value={pass} onChange={(data) => setPass(data.target.value)} required />
                    <br></br>
                    <button type="submit" className="mt-4 LSbtn" onClick={(event) => onLogin(event)}>Login
                    </button>
                    <br></br>
                    <div className="d-inline-flex mt-5 mb-0 LSbs">
                        <p className="mb-0">New User?</p>
                        <Link to="/RequestAccess" className="ms-1 text-decoration-none LSl">Request Access</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginScreen;