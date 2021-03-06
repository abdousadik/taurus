import React from 'react';

const Field = ({ name, label, value, onChange, placeholder = "", type = "text", error = "", step = "" }) => (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input type={type} step={step} value={value} className={"form-control" + (error && " is-invalid")}
            onChange={onChange} placeholder={placeholder || label} id={name} name={name} />
        {error && <p className="invalid-feedback">{error}</p>}
    </div>
);


export default Field;