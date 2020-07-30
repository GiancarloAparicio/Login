import React, { useState } from "react"
import * as Firebase from "../Firebase/Firebase"

const LoginForm = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const inputChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const loginForm = (event) => {
        event.preventDefault();

        Firebase.loginUser(user.email,user.password)
    }

    return (
        <>

            <form onSubmit={loginForm} method="POST" className="card container mx-auto p-3">
                <h4 className="p-2" >Login User:</h4>
                <div className="form-group">
                    <label htmlFor="Email1">Email address</label>
                    <input
                        name="email"
                        type="email"
                        autoComplete="off"
                        className="form-control"
                        id="Email1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={inputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Password1">Password</label>
                    <input
                        name="password"
                        type="password"
                        autoComplete="off"
                        className="form-control"
                        id="Password1"
                        placeholder="Password"
                        onChange={inputChange}
                    />
                </div>
                <div className="form-group mx-auto">
                    <button type="submit" className="btn mr-2 btn-success">
                        Register
                    </button>
                    <button type="reset" className="btn btn-danger">
                        Close
                    </button>
                </div>


            </form>
        </>
    )
}

export default LoginForm;