import React, { useState, useContext } from "react"
import * as Firebase from "../Firebase/Firebase"
import Input from "../Components/Input"
import AppContext from "../Context/AppContext"
import {statusInputs} from "../Context/AppActions"

const LoginForm = () => {

    let [state,dispatch]=useContext(AppContext)

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

        Firebase.loginUser(user.email, user.password,dispatch)
    }

    const resetInputs=()=>{
        dispatch(statusInputs("reset-status-login"))
    }

    return (
        <>  
            <form onSubmit={loginForm} method="POST" className="card container mx-auto p-3">
                <h4 className="p-2" >Login User:</h4>
                <Input  name="email"
                        type="email" 
                        id="Email2"
                        validate={state?.validateInputs?.inputLoginEmail}
                        placeholder="Enter email"
                        onChange={inputChange} />

                <Input  name="password"
                        type="password" 
                        id="Password2"
                        validate={state?.validateInputs?.inputLoginPassword}
                        placeholder="Password"
                        onChange={inputChange} />

                <div className="form-group mx-auto">
                    <button type="submit" className="btn mr-2 btn-success">
                        Register
                    </button>
                    <button type="reset" className="btn btn-danger" onClick={resetInputs}>
                        Close
                    </button>
                </div>


            </form>
        </>
    )
}

export default LoginForm;