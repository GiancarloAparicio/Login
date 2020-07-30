import React from "react";

//Includes
import NavBar from "../includes/NavBar";
import LoginForm from "../includes/LoginForm";
import Modal from "../includes/Modal";


const LoginPage = () => {
 
    return (
        <>
            <NavBar />
            <Modal />
            <div className="row container mt-5 mx-auto ">
                <div className="col-md-6 mx-auto">
                    <LoginForm />
                </div>

            </div>
        </>
    )

}

export default LoginPage;