import React from 'react'

const style = {
    addEmp: {
        fontSize: '20px',
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        padding: '10px 20px',
        cursor: 'pointer'
    },
    editStatus: {
        fontSize: '20px',
        position: 'fixed',
        bottom: '20px',
        left: '270px',
        padding: '10px 20px',
        cursor: 'pointer'
    },
    editColor: {
        fontSize: '20px',
        position: 'fixed',
        bottom: '20px',
        left: '475px',
        padding: '10px 20px',
        cursor: 'pointer'
    }
    
}

const Button = ({text, type, handler}) => {
    return (
    <button style = {style[type]} onClick = {handler}>{text}</button>
    )
}

export default Button