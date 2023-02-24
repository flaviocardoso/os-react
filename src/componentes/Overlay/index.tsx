import React from "react";
import style from "./Overlay.module.scss";

interface Props {
    mostrar: Boolean,
    onClick?: (() => void) | ((e: any) => void)
}

const Overlay: React.FC<Props> = ({ mostrar, onClick }: Props) => {
    let overlay = 
        (mostrar) ?  
        <div className={style.Overlay} onClick={onClick}></div> : 
        <></>
    return (
        overlay
    );
}

export default Overlay;