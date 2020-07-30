import React, { useState, useContext } from "react"

//Firebase
import {loginUser} from "../Firebase/Firebase"

//Components
import Input from "../Components/Input"

//Context
import {statusInputs} from "../Context/AppActions"
import AppContext from "../Context/AppContext"


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

        loginUser(user.email, user.password,dispatch)
    }

    const resetInputs=()=>{
        dispatch(statusInputs("reset-status","login"))
    }

    return (
        <>  
            <form onSubmit={loginForm} method="POST" className="card container mx-auto p-3">
                <h4 className="p-2" >Login User:</h4>
                <Input  name="email"
                        type="email" 
                        id="Email2"
                        validate={state?.validateInputs?.loginInputEmail}
                        placeholder="Enter email"
                        onChange={inputChange} />

                <Input  name="password"
                        type="password" 
                        id="Password2"
                        validate={state?.validateInputs?.loginInputPassword}
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