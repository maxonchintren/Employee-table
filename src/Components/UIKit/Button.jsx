import React from 'react'

import s from './UI.module.css' 

const Button = ({text, type, handler}) => {
    return (
    <button className = {s[type]} onClick = {handler}>{text}</button>
    )
}

export default Button