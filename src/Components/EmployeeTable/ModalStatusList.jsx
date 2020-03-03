import React from 'react'

import s from './Employee.module.css'

const ModalStatusList = ({ statuses, closeFunc, addFunc, deleteFunc }) => {
    const [value, setValue] = React.useState('')

    return (
        <div className = {s.outerContainer}>
            <div className={s.container}>
                <div className = {s.innerContainer}>
                    {statuses.map((status, index)=> {
                        return <span className={s.span} key={index}>{status}</span>
                    })}
                </div>
                <div className = {s.innerContainer}>
                    {statuses.map((status, index) => {
                        return <button className={s.button} key ={index} onClick={() => deleteFunc(index)}>&times;</button>
                    })}
                </div>
                <div className = {s.innerContainer}>
                    <input type ='text' value = {value} onChange = {(event) => setValue(event.target.value)} maxLength = '25'/>
                    <button className = {s.span} onClick={() => addFunc(value, setValue)}>Добавить в список</button>
                </div>
                <button className= {s.exit} onClick={closeFunc}>&times;</button>
            </div>
        </div>
    )
}

export default ModalStatusList