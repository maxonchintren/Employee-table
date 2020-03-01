import React from 'react'

const styles = {
    container: {
        width: '95%',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        height: '100px',
    },
    button: {
        height: '20px',
        borderRadius: '5px',
        margin: '0 5px',
        border: '1px solid #ccc'
    }
}

const StatusModal = ({ inputHandler }) => {
    const statuses = ['Идет', 'Согласован старт', 'Завершается']
    return (
        <div style = {styles.container}>
            {statuses.map((status,index) => {
                return <button onClick={inputHandler} key ={index} style ={styles.button}>{status}</button>
            })}
        </div>
    )
}

export default StatusModal