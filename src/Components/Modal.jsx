import React from 'react'

const styles = {
    outerContainer: {
        width: '100%',
        height: '100vh',
        background: 'rgba(0, 0, 0, .5)',
        zIndex: '999',
        position: 'absolute',
        left: '0',
        top: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        width: '600px',
        padding: '20px 30px',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        borderRadius: '5px',
        border: '2px solid #ccc'
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    span: {
        margin: '15px 0',

    },
    button: {
        margin: '15px 0',
        background: 'red',
        color: 'white',
        borderRadius: '85%',
        border: 'none'
    },
    exit: {
        position: 'absolute',
        top: '5px',
        right: '5px'
    }
}


const Modal = ({ statuses, closeFunc, addFunc, deleteFunc }) => {
    const [value, setValue] = React.useState('')

    return (
        <div style = {styles.outerContainer}>
            <div style={styles.container}>
                <div style = {styles.innerContainer}>
                    {statuses.map((status, index)=> {
                        return <span style={styles.span} key={index}>{status}</span>
                    })}
                </div>
                <div style = {styles.innerContainer}>
                    {statuses.map((status, index) => {
                        return <button style={styles.button} key ={index} onClick={deleteFunc.bind(null, index)}>&times;</button>
                    })}
                </div>
                <div style = {styles.innerContainer}>
                    <input type ='text' value = {value} onChange = {(event) => setValue(event.target.value)} maxLength = '25'/>
                    <button style = {styles.span} onClick={addFunc.bind(null, value, setValue)}>Добавить в список</button>
                </div>
                <button style= {styles.exit} onClick={closeFunc}>&times;</button>
            </div>
        </div>
    )
}

export default Modal