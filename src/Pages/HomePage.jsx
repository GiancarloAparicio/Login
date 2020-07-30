import React, { useContext } from "react"
import AppContext from "../Context/AppContext"
import {closeUser} from "../Firebase/Firebase"
import {currentUser} from "../Context/AppActions"

const HomePage = () => {

    const [state,dispatch]=useContext(AppContext)

    const closeSession=()=>{
        closeUser()
        dispatch(currentUser({}))
    }

    return (
        <div className="container">
            <h1>Hola usuario:  {state?.currentUser?.email}</h1> 
            <button className="btn btn-danger" onClick={closeSession}>
                Cerrar Session
            </button>
        </div>

    )
}

export default HomePage;