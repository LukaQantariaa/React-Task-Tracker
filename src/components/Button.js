import React from 'react'
import propTypes from "prop-types"

const Button = (props) => {

    const btnStyle = {
        backgroundColor: props.color
    }

    return (
        <button 
            className="btn"
            style={btnStyle}
            onClick={props.onClick}
        > {props.text} </button>
    )
}

Button.defaultProps = {
    color: "red",
    text: "default",
}

Button.defaultProps = {
    color: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
    onClick: propTypes.func
}

export default Button
