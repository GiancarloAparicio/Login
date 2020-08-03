import React, { useContext } from "react"
import { closeMessageError } from "../Context/AppActions"
import AppContext from "../Context/AppContext"


const ErrorMessage = () => {

    const [state, dispatch] = useContext(AppContext)

    let message

    (state?.validateInputs?.errorMessage === "auth/too-many-requests") ?
        message = "Demasiados intentos de iniciar session, intente mas tarde..."
        : message = "Error inesperado, comunicar a la pagina... :("

    const closeMessage = () => {
        dispatch(closeMessageError())
    }

    return (
        <div className="alert alert-dismissible alert-danger mt-4">
            <button onClick={closeMessage} className="close">&times;</button>
            <h4 className="alert-heading">Oops..!!</h4>
            <p className="mb-0">{message}</p>
        </div>
    )
}

export default ErrorMessage