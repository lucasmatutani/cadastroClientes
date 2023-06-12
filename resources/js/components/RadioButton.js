import React from 'react';

const RadioButton = ({ name, label, value, onChange }) => {
    return (
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name={name} id={value} value={value} onChange={onChange} />
            <label className="form-check-label" htmlFor={value}>{label}</label>
        </div>
    );
}

export default RadioButton;
