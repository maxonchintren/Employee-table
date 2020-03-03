import React from 'react'

const InputCell = ({text , inputHandler, index, columnKey, month, loaded}) => {
    const [value, setValue] = React.useState(text)


    function saveInput(event) {
        if (event.key === 'Enter') {
            let target = event.target
            inputHandler(value, index, columnKey, month)
            target.style.background = 'rgba(52, 163, 46, 0.2)';
            setTimeout(() => {
                target.style.background = 'transparent'
            }, 300);
            target.blur()
        }
    }

    function onChange(event) {
        setValue(event.target.value)
    }

    const style = {
        background: 'transparent',
        width: '90%',
        height: '50px',
        border: 'none',
        padding: '10px 3px',
        fontSize: 'inherit',
        textAlign: 'center',
        margin: '0 auto'
    }

    return (
        <input style = {style} value = {value} onKeyPress = {saveInput} onChange = {onChange} ></input>
    )
}

export default InputCell