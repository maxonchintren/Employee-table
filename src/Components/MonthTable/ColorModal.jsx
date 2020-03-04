import React from 'react'

import s from './Month.module.css'

const ColorModal = ({ colors, index, changeColor, month }) => {
  return (
    <div className={s.colormodal_container}>
      {colors.map((color, i) => {
        return (
          <button
            key={i}
            className={s.colormodal_button}
            onClick={event => changeColor(index, month, event)}
          >
            {color.name}
          </button>
        )
      })}
    </div>
  )
}

export default ColorModal
