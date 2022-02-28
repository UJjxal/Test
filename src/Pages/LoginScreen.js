import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import $ from 'jquery'
import TransparentFooter from '../Components/TransparentFooter';
import logo from '../logo.png';
import axios from 'axios';
import { toaster } from 'evergreen-ui';

function LoginScreen() {
    const navigate = useNavigate();

    const [id, setId] = useState("");
    const [pass, setPass] = useState("");

    const [token, setToken] = useState({});

    const [user, setUser] = useState({})

    const onRequestAccess = (event) => {
        event.preventDefault();

    }

    useEffect(() => {
        if (Object.keys(token).length != 0) {
            getDetails();
        }
    }, [token])

    useEffect(() => {
        if (Object.keys(user).length != 0) {
            redirect();
        }
    }, [user])

    const onLogin = (event) => {
        event.preventDefault();

        //check if email correct
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (id == '') {
            $('.errorMSG').text("Please enter Email ID").animate({ opacity: '1' }, "slow");
            setTimeout(function () {
                $('.errorMSG').animate({ opacity: '0' }, "slow");
            }, 3000);
        } else if (!regex.test(id)) {
            $('.errorMSG').text("Enter correct Email").animate({ opacity: '1' }, "slow");
            setTimeout(function () {
                $('.errorMSG').animate({ opacity: '0' }, "slow");
            }, 3000);
        } else if (pass == '') {
            $('.errorMSG').text("Please enter Password").animate({ opacity: '1' }, "slow");
            setTimeout(function () {
                $('.errorMSG').animate({ opacity: '0' }, "slow");
            }, 3000);
        } else {
            authenticate();
        }
    }

    const authenticate = () => {
        const bodyFormData = new FormData();
        bodyFormData.append("grant_type", 'password');
        bodyFormData.append("username", id);
        bodyFormData.append("password", pass);
        axios.request(
            {
                method: 'POST',
                headers: {
                    'content-type': 'multipart/form-data',
                },
                auth: {
                    username: 'user_client_app',
                    password: 'password',
                },
                data: bodyFormData,
                url: 'http://localhost:9080/api/oauth/token',
            }
        ).then(function (res) {
            setToken(res.data);
            $('.successMSG').text("Login successful").animate({ opacity: '1' }, "slow");
            setTimeout(function () {
                $('.successMSG').animate({ opacity: '0' }, "slow");
            }, 3000);
        }).catch(function (err) {
            $('.errorMSG').text(err.response.data.error_description).animate({ opacity: '1' }, "slow");
            setTimeout(function () {
                $('.errorMSG').animate({ opacity: '0' }, "slow");
            }, 3000);
        });
    }

    const getDetails = () => {
        axios.request({
            url: "http://localhost:9080/api/user/login",
            method: "GET",
            headers: {
                authorization: "Bearer " + token.access_token
            }
        }).then(res => {
            setUser(res.data.serviceData);
        }).catch(err => {
            console.log(err)
        })
    }

    const redirect = () => {
        console.log(user)
        if (user.role === "Admin") {
            navigate("/Admin", { state: { user: user, token: token } })
        } else if (user.role === "Lead" || user.role === "Developer") {
            navigate("/Dashboard", { state: { user: user, token: token } })
        }
    }

    $(document).ready(function () {
    });

    return (
        <div className="LSmain">
            <p className="mx-auto px-3 py-1 errorMSG"></p>
            <p className="mx-auto px-3 py-1 successMSG"></p>
            <img className='m-3 position-absolute' src={logo} height="15px"></img>
            <div className="LSmain py-5">
                <div className="rounded shadow px-5 pt-3 pb-0 mx-5 bg-white LSdiv h-100 text-center">
                    <p className="w-auto fw-bold LScT">AssetMark - Shift Allowance</p>
                    <form className="text-center LSfm">
                        <p className="text-center LSsT">Sign In</p>
                        <p className="w-25 mx-auto LSdes">Hello there! Sign in and start managing your shift Allowance</p>
                        <br></br>
                        <input type="email" className="LSin" placeholder="Email ID" value={id}
                            onChange={(data) => setId(data.target.value)} required ></input><br></br>
                        <input type="password" className="LSin"
                            placeholder="Password" value={pass} onChange={(data) => setPass(data.target.value)} required />
                        <br></br>
                        <button type="submit" className="mt-4 LSbtn" onClick={(event) => onLogin(event)}>Login
                        </button>
                        <br></br>
                    </form>
                    <div className="d-inline-flex LSbs">
                        <p className="mb-0">New User?</p>
                        <Link to="/RequestAccess" className="ms-1 text-decoration-none LSl">Request Access</Link>
                    </div>
                </div>
                <TransparentFooter />
            </div>
        </div>
    );
}

export default LoginScreen;