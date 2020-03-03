import React from 'react'

import s from './Employee.module.css'

const StatusModal = ({ inputHandler, statuses, setClick }) => {
    const [value, setValue] = React.useState('Идет')

    function handleChange(event) {
        setValue(event.target.value)
    }
    function handleSubmit(event) {
        event.preventDefault()
        inputHandler(event, value)
        setClick(false)
    }

    return (
        <form onSubmit = {handleSubmit}>
            <select className={s.select_container} onChange={handleChange} value = {value}>
                {statuses.map((status, index) => {
                    return <option key={index} >{status}</option>
                })}
            </select>
            <input type ='submit' value ='Сохранить'/>
        </form>
    )
}

export default StatusModal