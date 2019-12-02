import React from 'react'

export default (props) => {
    const style = {
        borderColor: props.valorInvalido ? '#d50000' : '#ccc',
        backgroundColor: props.valorInvalido ? '#ffcdd2' : '#fff'
    }

    const properties = Object.assign({}, props)
    delete properties.valorInvalido

    return (
        <input 
            type="text"
            style={style}
            {...properties}
        />
    )
}