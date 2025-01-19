import React from "react";
import './Textarea.scss'

interface TextareaProps {
    value: string,
    onChange: (e: any) => any;
    placeholder: string
}


function Textarea({
    value = '',
    onChange,
    placeholder
}: TextareaProps) {
    return (
        <div className="textarea__wrapper">
            <span>{placeholder}</span>
            <textarea
                className="textarea"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>

    );
}

export default Textarea;