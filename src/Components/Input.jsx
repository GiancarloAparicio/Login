import React from "react";


const Input = ({messageError="Sorry, the entered field is incorrect. Try again?", name = "name", type = "text", id = "Password1", placeholder = "", onChange = null, validate = "" }) => {

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
        <div className="form-group mb-3">
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
            {
                (validate === "is-invalid") ?
                    <p className="invalid-feedback d-relative">{messageError}</p>
                    : ""
            }
        </div>
    )
}

export default Input