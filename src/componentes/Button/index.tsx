import React from "react";

interface Props {
    children: React.ReactNode,
    style: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: (() => void) | ((event: any) => void )
}

const Button: React.FC<Props> = ({ onClick, type, style, children}: Props) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={style}
        >{children}</button>
    )
}

export default Button;