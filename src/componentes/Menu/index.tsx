import React from "react";
import style from './Menu.module.scss';
import Overlay from "componentes/Overlay";
import useGetClickEvento from "state/hooks/useGetClickEvento";

const Menu: React.FC = () => {
    const { toggle } = useGetClickEvento();
    const estilos = [
        style.MenuStyle,
        (toggle) ? style.show: style.hide
    ];

    return (
        <>
        <div className={estilos.join(' ')}></div>
        <Overlay></Overlay>
        </>
    );
}

export default Menu;
