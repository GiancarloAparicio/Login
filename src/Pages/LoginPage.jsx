import React, { useContext } from "react";

//Includes
import NavBar from "../includes/NavBar";
import LoginForm from "../includes/LoginForm";
import Modal from "../includes/Modal";
import ErrorMessage from "../Components/ErrorMessage";
import AppContext from "../Context/AppContext";


const LoginPage = () => {

    const [state]=useContext(AppContext)

    return (
        <>
            <NavBar />
            <Modal />
            <div className="row container mt-5 mx-auto ">
                <div className="col-md-6 mx-auto">
                    <LoginForm />
                    {
                        (state?.validateInputs?.manyRequests || state?.validateInputs?.errorMessage )?
                        <ErrorMessage  /> : ""       
                    }
                </div>

            </div>
        </>
    )

}

export default LoginPage;