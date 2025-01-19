import React from "react";
import './Input.scss'

interface InputProps {
    value: string,
    onChange: (e: any) => any,
    placeholder: string
}


function Input({
    value = '',
    onChange,
    placeholder
}: InputProps) {
    return (
        <div className="input__wrapper">
            <span>{placeholder}</span>
            <input
                className="input"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>

    );
}

export default Input;