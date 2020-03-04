import React from 'react'

import s from './Employee.module.css'

const ModalStatusList = ({ statuses, closeFunc, addFunc, deleteFunc }) => {
  const [value, setValue] = React.useState('')

  function closeHandler(event) {
    let target = event.target.parentElement.parentElement
    target.style.transform = 'scale(0.01, 0.01)'
    setTimeout(() => {
      closeFunc()
    }, 170)
  }

  return (
    <div className={s.outerContainer}>
      <div className={s.container}>
        <div className={s.innerContainer}>
          {statuses.map((status, index) => {
            return (
              <div className={s.statusesCont} key={index}>
                <span className={s.span}>{status}</span>
                <button className={s.button} onClick={() => deleteFunc(index)}>
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
            value={value}
            onChange={event => setValue(event.target.value)}
            maxLength="25"
          />
          <button
            className={s.addBtn}
            onClick={e => addFunc(value, setValue, e)}
          >
            Добавить в список
          </button>
          <button className={s.exit} onClick={closeHandler}>
            &times;
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalStatusList
