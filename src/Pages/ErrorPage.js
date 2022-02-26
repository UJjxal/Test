import React from "react";
import logo from '../logo.png';

function ErrorPage() {

    return (
        <div className="asdf">
            <div className="navbar navbar-expand p-0 hDash ">
                <img className='m-3' src={logo} height="15px"></img>
            </div>
            <div id="error-page">
                <div class="content">
                    <h2 class="header" data-text="404">
                        404
                    </h2>
                    <h4 data-text="Ops! Page not found">
                        Ops! Page not found
                    </h4>
                    <p>
                        Sorry, the page you're looking for doesn't exist.
                    </p>
                    <div class="btns">
                        <a href="http://localhost:3000/">return home</a>
                    </div>
                </div>
            </div>
            <footer className="footer w-100 bg position-absolute shadow-lg">
                <p className="ms-auto me-4">© 2022 JavaTeam1 </p>
            </footer>
        </div>
    );
}

export default ErrorPage;