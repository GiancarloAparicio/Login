import React from "react";


const Input = ({ name = "name", type = "text", id = "Password1", placeholder = "", onChange = null, validate = "" }) => {

    let className

    switch (validate) {
        case "is-invalid":
            className = "form-control is-invalid"
            break;

        case "is-valid":
            className = "form-control is-valid"
            break;

        default:
            className = "form-control"
            break;
    }

    return (
        <div className="form-group">
            <label htmlFor={id}>{placeholder}</label>
            <input
                name={name}
                type={type}
                autoComplete="off"
                className={className}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}

export default Input