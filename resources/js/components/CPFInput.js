import React from 'react';
import InputMask from 'react-input-mask';

class CPFInput extends React.Component {
    handleChange = (event) => {
        event.target.value = event.target.value.replaceAll('_', '');
        if(this.props.onChange) this.props.onChange(event);
    };

    render() {
        const { name, label, required } = this.props;

        return (
            <div className="col mb-3">
                <label htmlFor={name}>{label}</label>
                <InputMask
                    mask="999.999.999-99"
                    value={this.props.value}
                    onChange={this.handleChange}
                >
                    {(inputProps) => (
                        <input
                            {...inputProps}
                            type="text"
                            className="form-control"
                            id={name}
                            name={name}
                            required={required}
                        />
                    )}
                </InputMask>
            </div>
        );
    }
}

export default CPFInput;
