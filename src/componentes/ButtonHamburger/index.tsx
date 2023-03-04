import Button from "componentes/Button";
import React from "react";
import useToggleEvento from "state/hooks/useToggleEvento";
import style from './ButtonHamburger.module.scss';

const ButtonHamburger: React.FC = () => {
    const [ { toggle, onClick  }, ] = useToggleEvento();
    // const [ click, setClick] = useClickEvento();
    // altera o botão para x ou ham para o evento de clique
    let bx = (toggle) ? 
        <><div className={style.exis}></div><div className={style.exis}></div><div className={style.exis}></div></>: 
        <><div className={style.ham}></div><div className={style.ham}></div><div className={style.ham}></div></>;

    return (
        <Button type='button' onClick={onClick} style={style.ButtonHamburger}>
            { bx }
        </Button>
    );
}

export default ButtonHamburger;
