import React from "react";
import useGetClickEvento from "state/hooks/useGetClickEvento";
import style from "./Overlay.module.scss";

const Overlay: React.FC = () => {
    const { toggle, onClick } = useGetClickEvento();
    // altera para mostrar o overlay o não
    let overlay = 
        (toggle) ?  
        <div className={style.Overlay} onClick={onClick}></div> : 
        <></>
    return (
        overlay
    );
}

export default Overlay;
