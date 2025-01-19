import React from "react";
import './Button.scss'

interface ButtonProps {
    content: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

function Button({
    content = '',
    onClick = () => {}
}: ButtonProps) {
    return (
        <button
            onClick={(e) => onClick(e)}
            className="button">{content}</button>
    );
}

export default Button;