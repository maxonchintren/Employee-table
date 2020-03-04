import React from 'react'

import s from './Month.module.css'

const ModalColorList = ({
  colors,
  closeModal,
  handleAddBtnClick,
  handleDelBtnClick,
}) => {
  const [value, setValue] = React.useState('')
  const [newColorName, setNewColor] = React.useState('')

  function closeHandler(event) {
    let target = event.target.parentElement.parentElement
    target.style.transform = 'scale(0.01, 0.01)'
    setTimeout(() => {
      closeModal()
    }, 170)
  }

  return (
    <div className={s.outerContainer}>
      <div className={s.container}>
        <div className={s.innerContainer}>
          {colors.map((color, index) => {
            return (
              <div className={s.colorsCont} key={index}>
                <span className={s.span}>{color.name}</span>
                <div
                  style={{
                    height: '30px',
                    width: '30px',
                    background: `rgb(${color.color[0]}, ${color.color[1]}, ${color.color[2]})`,
                    margin: '0 10px',
                    border: '1px solid #ccc',
                  }}
                ></div>
                <button
                  className={s.button}
                  key={index}
                  onClick={() => handleDelBtnClick(index)}
                >
                  &times;
                </button>
              </div>
            )
          })}
        </div>
        <div className={s.innerContainer}>
          <input
            className={s.input}
            type="text"
            value={newColorName}
            onChange={event => setNewColor(event.target.value)}
            maxLength="20"
            placeholder="Название цвета"
          />
          <input
            className={s.input}
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)}
            maxLength="13"
            placeholder="255, 255, 255"
          />
          <button
            className={s.addBtn}
            onClick={e => handleAddBtnClick(value, newColorName, setValue, e)}
          >
            Добавить в список (формат RGB)
          </button>
          <button className={s.exit} onClick={closeHandler}>
            &times;
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalColorList
