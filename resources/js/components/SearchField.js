import React from 'react';

const SearchField = ({ type, name, label, onChange }) => {
    return (
        <div className="col mb-3">
            <label htmlFor={name}>{label}</label>
            <input 
                type={type}
                className="form-control"
                id={name}
                name={name}
                onChange={onChange} 
            />
        </div>
    );
}

export default SearchField;
