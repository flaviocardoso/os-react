import React from "react";
import style from './Menu.module.scss';
import Overlay from "componentes/Overlay";

interface Props {
    visivel: Boolean,
    onClick?: (() => void) | ((e: any) => void)
}

const Menu: React.FC<Props> = ({ visivel, onClick }: Props) => {
    const estilos = [
        style.MenuStyle,
        (visivel) ? style.show: style.hide
    ];

    return (
        <>
        <div className={estilos.join(' ')}>
        </div>
        <Overlay mostrar={visivel} onClick={onClick}></Overlay>
        </>
    );
}

export default Menu;
