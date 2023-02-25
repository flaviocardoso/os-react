import Button from "componentes/Button";
import React from "react";
import style from './ButtonHamburger.module.scss';

interface Props {
    hasX: Boolean,
    onClick?: (() => void) | ((e: any) => void)
}

const ButtonHamburger: React.FC<Props> = ({ hasX, onClick }: Props) => {

    let bx = (hasX) ? 
        <><div className={style.exis}></div><div className={style.exis}></div><div className={style.exis}></div></>: 
        <><div className={style.ham}></div><div className={style.ham}></div><div className={style.ham}></div></>;

    return (
        <Button type='button' onClick={onClick} style={style.ButtonHamburger}>
            { bx }
        </Button>
    );
}

export default ButtonHamburger;
