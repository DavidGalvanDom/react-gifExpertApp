import React,{useState} from 'react';

import PropTypes from 'prop-types';


export const AddCategory = ({setCatagories}) => {
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCatagories(inputValue);
        setinputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>            
            <input
             type="text"
             value={inputValue}
             onChange={handleInputChange}></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCatagories : PropTypes.func.isRequired,
}