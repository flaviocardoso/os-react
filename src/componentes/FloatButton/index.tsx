import React, { MouseEvent, useEffect, useState } from "react";
import style from "./FloatButton.module.scss";

const FloatButton:React.FC = () => {
    const [display, setDisplay] = useState("none");
    const toggle = () => {
        let scrolled = document.body.scrollTop || document.documentElement.scrollTop;
        let size = window.innerHeight / 4;
        let limite = scrolled - size;
        setDisplay("block");
        if (limite <= 0) {
            setDisplay("none");
        }
    }
    // evento de escuta no scroll, visibilidade do botão de float
    useEffect(() => {
        toggle();
        document.body.addEventListener('scroll', toggle);
        return () => {
            document.body.removeEventListener('scroll', toggle);
        }
    });
    // envia para o topo com o comportamento lento
    const moveTop = (e: MouseEvent) => {
        document.body.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <button onClick={moveTop} style={{ display }} className={style.FloatButton}>
            <div className={style.FloatButtonSeta1}></div>
            <div className={style.FloatButtonSeta2}></div>
        </button>
    );
}
export default FloatButton;