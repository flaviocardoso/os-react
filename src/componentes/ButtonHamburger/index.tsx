import Button from "componentes/Button";
import React from "react";
import style from './ButtonHamburger.module.scss';

interface Props {
    onClick?: (() => void) | ((e: any) => void)
}

const ButtonHamburger: React.FC<Props> = ({ onClick }: Props) => {
    return (
        <Button type='button' onClick={onClick} style={style.ButtonHamburger}>
            <div></div>
            <div></div>
            <div></div>
        </Button>
    );
}

export default ButtonHamburger;
