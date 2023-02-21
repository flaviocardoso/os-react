import Button from "componentes/Button";
import React from "react";
import style from './Menu.module.scss';

interface Props {
    visivel: Boolean,
    onClick?: (() => void) | ((e: any) => void)
}

const Menu: React.FC<Props> = ({ visivel, onClick }: Props) => {
    const estilos = [
        style.MenuStyle,
        (!visivel) ? style.hide : style.show
    ];

    const estilos2 = [
        (!visivel) ? style.hide : style.show,
        (!visivel) ? style.MenuStyle : style.Overlay,
    ];

    return (
        <>
        <div className={estilos.join(' ')}>
            <div className={style.MenuVoltar}>
                <Button type='button' onClick={onClick} style={style.ButtonNavLogout}>
                    <div></div>
                    <div></div>
                    <div></div>
                </Button>
             </div>
        </div>
        <div className={estilos2.join(' ')} onClick={onClick}></div>
        </>
    );
}

export default Menu;