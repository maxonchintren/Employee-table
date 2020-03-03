import React from 'react'

const styles = {
    container: {
        width: '95%',
        margin: '0 auto',
        height: '50px',
        cursor: 'pointer',
        border: '1px solid #ccc',
        borderRadius: '5px'
    }
}

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
            <select style={styles.container} onChange={handleChange} value = {value}>
                {statuses.map((status, index) => {
                    return <option key={index} >{status}</option>
                })}
            </select>
            <input type ='submit' value ='Сохранить'/>
        </form>
    )
}

export default StatusModal