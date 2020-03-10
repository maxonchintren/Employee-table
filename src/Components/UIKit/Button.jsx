import React from 'react'

import s from './UI.module.css'

const Button = ({ text, type, handleClick }) => {
  return (
    <button className={s[type]} onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button
