import React from 'react'

import s from './UI.module.css'

const InputCell = ({ text, inputHandler, index, columnKey, month }) => {
  const [value, setValue] = React.useState(text)

  function saveInput(event) {
    if (event.key === 'Enter') {
      let target = event.target
      inputHandler(value, index, columnKey, month)
      target.style.background = 'rgba(52, 163, 46, 0.2)'
      setTimeout(() => {
        target.style.background = 'transparent'
      }, 300)
      target.blur()
    }
  }

  function onChange(event) {
    setValue(event.target.value)
  }

  return (
    <input
      className={s.input_cell}
      value={value}
      onKeyPress={saveInput}
      onChange={onChange}
    ></input>
  )
}

export default InputCell
