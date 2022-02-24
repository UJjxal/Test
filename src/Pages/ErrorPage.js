import React, { useState } from "react";

function ErrorPage() {

    return (
        <div className="asdf">
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
        </div>
    );
}

export default ErrorPage;