import React, { useContext,useEffect } from "react";

//React Router Dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

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
        <>
            <Router>
                <Switch>
                    <Route path="/" component={ state?.currentUserExists===true? HomePage :LoginPage} />
                </Switch>
            </Router>
            
        </>

    )
}

export default RouterPages;