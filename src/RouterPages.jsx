import React, { useContext,useEffect } from "react";


//Pages
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";

//Context
import AppContext from "./Context/AppContext"

//Firebase
import {listener} from "./Firebase/Firebase";

const RouterPages = () => {
    const [state, dispatch] = useContext(AppContext)

    useEffect(()=>{
        listener(dispatch)
    },[dispatch])


    return (
        //Error Solucionarlo
        state?.currentUserExists==="true"? <HomePage /> : <LoginPage />    
    )
}

export default RouterPages;