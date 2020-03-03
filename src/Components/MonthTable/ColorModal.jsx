import React from 'react'

const styles = {
    container: {
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        height: '100px',
        position: 'absolute',
        zIndex: '999',
        top: '0',
        left: '0',
        
    },
    button: {
        width: '100%',
        fontSize: '12px',
        height: '18px',
        padding: '2px 0',
        margin: '0 auto',
        border: 'none',
        cursor: 'pointer',
        background: '#fff'
    }
}

const ColorModal = ({colors, index , changeColor, month}) => {
    return (
        <div style = {styles.container}>
            {colors.map((color,i) => {
                return <button  key ={i} style ={styles.button} onClick = {() => changeColor(index, month)}>{color.name}</button>
            })}
        </div>
    )
}

export default ColorModal