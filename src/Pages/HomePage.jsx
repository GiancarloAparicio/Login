import React, { useContext } from "react"
import AppContext from "../Context/AppContext"
import { closeUser } from "../Firebase/Firebase"

//React Router Dom
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const HomePage = () => {

    const [state, dispatch] = useContext(AppContext)

    const closeSession = () => {
        closeUser(dispatch)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarColor01" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse show" id="navbar" >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Courses</a>
                        </li>
                        <li>
                            <button className="btn btn-danger" onClick={closeSession}>
                                Cerrar Session
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container">


                <h1>Hola usuario:  {state?.currentUser?.email}</h1>

                {/* <Router>
                    <Switch>
                        <Route path="/" component={state?.currentUserExists == true ? HomePage : LoginPage} />
                    </Switch>
                </Router> */}

            </div>
        </>


    )
}

export default HomePage;