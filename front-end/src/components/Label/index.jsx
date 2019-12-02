import React from 'react'

export default (props) => {
    const style = {
        color: props.valorInvalido ? '#d50000' : '#444'
    }

    return (
        <label htmlFor={props.htmlFor} style={style}>{props.texto}</label>
    )
}