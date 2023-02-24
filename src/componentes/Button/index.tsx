import React from "react";
import styledefault from "./Button.module.scss";

interface Props {
    children: React.ReactNode,
    style?: string | undefined,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: (() => void) | ((event: any) => void )
}

const Button: React.FC<Props> = ({ onClick, type, style, children}: Props) => {
    let estilo = (style) ? style : styledefault.ButtonStyle

    return (
        <button
            onClick={onClick}
            type={type}
            className={estilo}
        >{children}</button>
    )
}

export default Button;
