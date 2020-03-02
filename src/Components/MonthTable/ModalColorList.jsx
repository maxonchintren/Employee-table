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
        width: '50%'
    },
    span: {
        margin: '15px 0',
        width: '35%'
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
    },
    colorsCont: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-evenly'
    },
    input: {
        width: '80%',
        margin: '15px auto'
    },
    addBtn: {
        width: '80%',
        margin: '15px auto'
    }
}


const ModalColorList = ({ colors, closeFunc, addFunc, deleteFunc }) => {
    const [value, setValue] = React.useState('')
    const [newColorName, setNewColor] = React.useState('')

    return (
        <div style={styles.outerContainer}>
            <div style={styles.container}>
                <div style={styles.innerContainer}>
                    {colors.map((color, index) => {
                        return (
                            <div style = {styles.colorsCont}  key={index}>
                                <span style={styles.span}>{color.name}</span>
                                <div style={{ height: '30px', width: '30px', background: `rgb(${color.color[0]}, ${color.color[1]}, ${color.color[2]})`, margin: '0 10px', border: '1px solid black' }}></div>
                                <button style={styles.button} key ={index} onClick={deleteFunc.bind(null, index)}>&times;</button>
                            </div>
                        )
                    })}
                </div>
                <div style={styles.innerContainer}>
                    <input style={styles.input} type='text' value={newColorName} onChange={(event) => setNewColor(event.target.value)} maxLength='20' placeholder='Название цвета' />
                    <input style={styles.input} type='text' value={value} onChange={(event) => setValue(event.target.value)} maxLength='13' placeholder='255, 255, 255' />
                    <button style={styles.addBtn} onClick={addFunc.bind(null, value, newColorName, setValue)}>Добавить в список (формат RGB)</button>
                </div>
                <button style={styles.exit} onClick={closeFunc}>&times;</button>
            </div>
        </div>
    )
}

export default ModalColorList