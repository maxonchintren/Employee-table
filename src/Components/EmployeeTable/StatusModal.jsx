import React from 'react'

import s from './Employee.module.css'

const StatusModal = ({ inputHandler, statuses }) => {
  const [value, setValue] = React.useState('Идет')

  function handleChange(event) {
    setValue(event.target.value)
  }
  function handleSubmit(event) {
    event.preventDefault()
    event.target.style.opacity = '0'
    inputHandler(event, value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      onClick={event => (event.target.style.opacity = '1')}
      className={s.select_container}
    >
      <select
        onClick={event => (event.target.parentElement.style.opacity = '1')}
        onChange={handleChange}
        value={value}
      >
        {statuses.map((status, index) => {
          return <option key={index}>{status}</option>
        })}
      </select>
      <input type="submit" value="Сохранить" />
    </form>
  )
}

export default StatusModal
