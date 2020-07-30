import React, { useContext,useEffect } from "react";

//React Router Dom
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

//Pages
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";

//Context
import AppContext from "./Context/AppContext"

//Firebase
import * as Firebase from "./Firebase/Firebase";

const RouterPages = () => {
    const [state, dispatch] = useContext(AppContext)

    useEffect(()=>{
        Firebase.listener(dispatch)
    },[])

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={ state?.currentUserExists? HomePage :LoginPage} />
                </Switch>
            </Router>
            
        </>

    )
}

export default RouterPages;