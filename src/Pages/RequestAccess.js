import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import $ from 'jquery'

export default function RequestAccess() {
    const navigate = useNavigate();

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("Select Role");
    const [pass, setPass] = useState("");
    const [confPass, setConfPass] = useState("");

    const onRequest = (event) => {
        event.preventDefault();
        //check if email correct
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        if (!regex.test(id)) {
            alert("Enter correct Email!!")
        } else if (id.slice(id.lastIndexOf('@') + 1) != "incedoinc.com") {
            alert("Enter official ID!!")
        } else if (!strongPassword.test(pass)) {
            $('.wpM').show();
        } else if (role == "Select Role") {
            alert("Please select role!!")
        }
    }

    $(document).ready(function () {
        if (pass != confPass) {
            $('#confP').css('color', 'red')
        } else {
            $('#confP').css('color', 'black')
        }

        $('.wpM').hide();
    });

    return (
        <div className='LSmain py-5'>
            <div className="rounded shadow px-5 pt-3 pb-0 mx-5 bg-white LSdiv h-100 text-center">
                <p className="w-auto fw-bold LScT">AssetMark - Shift Allowance</p>
                <form className="text-center LSfm">
                    <p className="text-center LSsT">Request Access</p>
                    <p className="w-25 mx-auto LSdes">Hello there! Request Access for your account</p>
                    <input type="email" className="RSin"
                        placeholder="Email ID" value={id} onChange={(data) => setId(data.target.value)} required ></input><br></br>
                    <input type="text" className="RSin"
                        placeholder="Name" value={name} onChange={(data) => setName(data.target.value)} required /><br></br>
                    <input type="password" className="RSin"
                        placeholder="Password" value={pass} onChange={(data) => setPass(data.target.value)} required />
                    <br></br>
                    <input type="password" id='confP' className="RSin"
                        placeholder="Confirm Password" value={confPass} onChange={(data) => setConfPass(data.target.value)} required />
                    <br></br>
                    <select className='RSin LSdd' value={role}
                        onChange={(data) => setRole(data.target.value)} required>
                        <option value="Role">Select Role</option>
                        <option value="Lead">Lead</option>
                        <option value="Admin">Admin</option>
                        <option value="Developer">Developer</option>
                    </select><br></br>
                    <p className="wpM" style={{ fontSize: "12px", color: 'red' }}>Choose a strong password</p>

                    <button type="submit" className="mt-4 LSbtn" onClick={(event) => onRequest(event)}>Request Access
                    </button>
                    <br></br>

                </form>
                <div className="d-inline-flex mb-0 LSbs">
                    <p className="mb-0">Already have account?</p>
                    <Link to="/" className="ms-1 text-decoration-none LSl">Login</Link>
                </div>
            </div>
        </div>
    );
}