import React from "react"

const EmailCheck = () => {

    return (<>
        <div className="alert alert-dismissible alert-warning mt-4 p-5">
            <h4 className="alert-heading">Verify user account:</h4>
            <p className="mb-0">To be able to access first, see confirm your <a rel="noopener noreferrer"  href="https://accounts.google.com/signin/v2/identifier?passive=1209600&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin" target="_blank" className="alert-link">email</a>.</p>
        </div>
    </>);
}

export default EmailCheck