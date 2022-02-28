import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import $ from 'jquery'
import logo from '../logo.png';
import TransparentFooter from '../Components/TransparentFooter';
import axios from 'axios'
import { toaster } from 'evergreen-ui';

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

        if (id == '') {
            $('.errorMSG').text("Please Enter Email ID").animate({ opacity: '1' }, "slow");
            setTimeout(function () {
                $('.errorMSG').animate({ opacity: '0' }, "slow");
            }, 3000);
        } else if (name == '') {
            $('.errorMSG').text("Please Enter Name").animate({ opacity: '1' }, "slow");
            setTimeout(function () {
                $('.errorMSG').animate({ opacity: '0' }, "slow");
            }, 3000);
        } else if (pass == '') {
            $('.errorMSG').text("Please Enter Password").animate({ opacity: '1' }, "slow");
            setTimeout(function () {
                $('.errorMSG').animate({ opacity: '0' }, "slow");
            }, 3000);
        } else if (pass != confPass) {
            $('.errorMSG').text("Password Does Not Match").animate({ opacity: '1' }, "slow");
            setTimeout(function () {
                $('.errorMSG').animate({ opacity: '0' }, "slow");
            }, 3000);
        } else if (!regex.test(id)) {
            $('.errorMSG').text("Please Enter Valid Email ID").animate({ opacity: '1' }, "slow");
            setTimeout(function () {
                $('.errorMSG').animate({ opacity: '0' }, "slow");
            }, 3000);
        } else if (id.slice(id.lastIndexOf('@') + 1) != "incedoinc.com") {
            $('.errorMSG').text("Please Enter official ID").animate({ opacity: '1' }, "slow");
            setTimeout(function () {
                $('.errorMSG').animate({ opacity: '0' }, "slow");
            }, 3000);
        } else if (!strongPassword.test(pass)) {
            $('.errorMSG').text("Password must contain at least 8 characters, at least 1 number and both lowercase and uppercase letters and special characters!").animate({ opacity: '1' }, "slow");
            setTimeout(function () {
                $('.errorMSG').animate({ opacity: '0' }, "slow");
            }, 3000);
        } else if (role == "Select Role") {
            $('.errorMSG').text("Please Select A Role").animate({ opacity: '1' }, "slow");
            setTimeout(function () {
                $('.errorMSG').animate({ opacity: '0' }, "slow");
            }, 3000);
        } else {
            makeRequest();
        }
    }

    const makeRequest = () => {
        const bodyFormData = new FormData();
        bodyFormData.append("grant_type", 'password');
        bodyFormData.append("username", id);
        bodyFormData.append("password", pass);

        axios.request(
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                data: {
                    "serviceData": {
                        "email": id,
                        "name": name,
                        "role": role,
                        "password": pass
                    }
                },
                url: 'http://localhost:9080/api/user/register'
            }
        ).then(function (res) {
            $('.successMSG').text("Access Request Added Successfully").animate({ opacity: '1' }, "slow");
            setTimeout(function () {
                $('.successMSG').animate({ opacity: '0' }, "slow");
            }, 3000);
        }).catch(function (err) {
            $('.errorMSG').text(err.response.data.errorDesc).animate({ opacity: '1' }, "slow");
            setTimeout(function () {
                $('.errorMSG').animate({ opacity: '0' }, "slow");
            }, 3000);
        });

    }

    $(document).ready(function () {
        if (pass != confPass) {
            $('#confP').css('color', 'red')
        } else {
            $('#confP').css('color', 'black')
        }
    });

    return (
        <div>
            <p className="mx-auto px-3 py-1 errorMSG"></p>
            <p className="mx-auto px-3 py-1 successMSG"></p>
            <img className='m-3 position-absolute' src={logo} height="15px"></img>
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
                        <select className='RSin LSdd' style={{ width: "245px"}} value={role}
                            onChange={(data) => setRole(data.target.value)} required>
                            <option value="Role">Select Role</option>
                            <option value="Lead">Lead</option>
                            <option value="Admin">Admin</option>
                            <option value="Developer">Developer</option>
                        </select><br></br>
                        <button type="submit" className="LSbtn" onClick={(event) => onRequest(event)}>Request Access
                        </button>
                        <br></br>

                    </form>
                    <div className="d-inline-flex mb-0 LSbs">
                        <p className="mb-0">Already have account?</p>
                        <Link to="/" className="ms-1 text-decoration-none LSl">Login</Link>
                    </div>
                </div>
                <TransparentFooter />
            </div>
        </div>
    );
}