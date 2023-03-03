import React, { useEffect, useState } from 'react';
import style from './Navbar.module.scss';
import ButtonHamburger from 'componentes/ButtonHamburger';
import ButtonLogout from 'componentes/ButtonLogout';
import useGetClickEvento from 'state/hooks/useGetClickEvento';

type typePosition  = 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';

const Navbar: React.FC = () => {
    const { toggle } = useGetClickEvento();
    const [position, setPosition] = useState<typePosition>('relative');
    const [bodyWidth, setBodyWidth] = useState(document.body.clientWidth);
    // altera o navbar para visibilidade no meni
    const estilos = [
        style.Navbar,
        (toggle) ? style.show: style.hide
    ];
    // alterar par fixar o menu sempre no topo e seguir na tela para deslocamento da scroll
    const posicionMenu = () => {
        let bodyPosition = document.body.scrollTop || document.documentElement.scrollTop;
        // let scrollbarWidth = document.body.offsetWidth - bodyWidth; // verificar a largura da scroll
        let element = document.getElementById("menu");
        if (element) {
            setBodyWidth(document.body.clientWidth)
            if (bodyPosition > element.offsetHeight) {
                setPosition("fixed");
            } else {
                setPosition("relative");
            }
        }
    }
    // evento de escuta de scroll para alterar a posição do menu
    useEffect(() => {
        posicionMenu();
        document.body.addEventListener('scroll', posicionMenu);
        return () => {
            document.body.removeEventListener('scroll', posicionMenu);
        }
    })

    return (
        <header id="menu" style={{ position, width: bodyWidth }} className={estilos.join(' ')}>
            <nav>
                <ul role="navigation" id="globalnav">
                    <li><ButtonHamburger /></li>
                    <li className={style.Logo}>LOGO</li>
                </ul>
                <ButtonLogout />
            </nav>   
        </header> 
    );
}

export default Navbar;
