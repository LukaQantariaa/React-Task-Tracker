import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToogle }) => {
    return (
        <div className={`task user-select-none ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => {onToogle(task.id)} }>
            <h3> {task.text} <FaTimes onClick={() => {onDelete(task.id)} } style={{
                    color: "red",
                    cursor: 'pointer'
                }} /> 
            </h3>
            <p> {task.day} </p>
        </div>
    )
}

export default Task
