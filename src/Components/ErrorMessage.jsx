import React, { useContext } from "react"
import {closeMessageError} from "../Context/AppActions"
import AppContext from "../Context/AppContext"


const ErrorMessage = () => {

    const [state,dispatch]=useContext(AppContext)

    let message

    if(state?.validateInputs?.manyRequests){
        message="Demasiados intentos de iniciar session, intente mas tarde..."
    }else if(state?.validateInputs?.errorMessage){
        message=state.validateInputs.errorMessage
    }

    const closeMessage=()=>{
        console.log(state)
        dispatch(closeMessageError())
    }

    return (
        <div className="alert alert-dismissible alert-danger mt-4">
            <button onClick={closeMessage} className="close" data-dismiss="alert">&times;</button>
            <h4 className="alert-heading">Oops..!!</h4>
            <p className="mb-0">{message}</p>
        </div>
    )
}

export default ErrorMessage