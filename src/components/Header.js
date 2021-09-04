import React from 'react';
import { PropTypes } from 'prop-types'
import Button from './Button'

export const Header = (props) => {
    const onButtonClick = (e) => {
        props.onAdd()
    }

    return (
        <header className="header">
            <h1 style={{
                color: "black",
                fontSize: "20px",
                lineHeight: 1,
                fontWeight: "bolder",
                cursor: "not-allowed"
            }}>Task - {props.title}</h1>
            <Button color={props.showAddTask ? "green" : "red"} text={props.showAddTask? "add" : "Close"} onClick={onButtonClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: "default"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

