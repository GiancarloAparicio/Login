import React from "react"

const LoaderPage = ({loanding}) => {

    let wrapper= "wrapper " + loanding

    return (
        <div className={wrapper}>
            <div className="loader">
                <div className="v-bar first"></div>
                <div className="v-bar second"></div>
                <div className="v-bar third"></div>
            </div>
        </div>
    )
}

export default LoaderPage