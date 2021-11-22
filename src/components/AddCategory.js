import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( { setCategorias } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if( inputValue.trim().length > 2 ) {
            setCategorias(cat => [inputValue, ...cat]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit = {(event) => handleSubmit(event)}>
            <input
                type='text'
                value={ inputValue }
                placeholder= {"Ingrese un valor."}
                onChange={(event) => handleInputChange(event)}

            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}
