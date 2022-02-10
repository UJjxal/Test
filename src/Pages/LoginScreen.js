//TODO UJjwal
import { Button } from "bootstrap";
import React, { Component } from "react";
class LoginScreen extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {

    }


    render() {
        return (
            <div className="main text-center">
                <div className="">
                    <h1 className="border border-3 border-dark py-3 px-5">AssetMark - Shift Allowance App</h1>
                </div>
                <div>
                    <div className="">
                        <p className="fw-bold">User ID</p>
                        <input></input>
                    </div>
                    <div>
                        <p className="fw-bold">Password</p>
                        <input></input>
                    </div>
                    <button type="button" class="btn btn-light border-dark px-3 py-1 border-2">Login</button>
                    <p>New User? Request Access</p>
                </div>
            </div>
        );
    }
}

export default LoginScreen;