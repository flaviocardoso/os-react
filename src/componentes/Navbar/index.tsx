import React, { useEffect, useLayoutEffect, useState } from 'react';
import style from './Navbar.module.scss';
import ButtonHamburger from 'componentes/ButtonHamburger';
import ButtonLogout from 'componentes/ButtonLogout';
import useGetClickEvento from 'state/hooks/useGetClickEvento';

type typePosition  = 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';

const Navbar: React.FC = () => {
    const { toggle } = useGetClickEvento();
    const [position, setPosition] = useState<typePosition>('relative');
    const [bodyWidth, setBodyWidth] = useState(document.body.clientWidth);

    const estilos = [
        style.Navbar,
        (toggle) ? style.show: style.hide
    ];

    const posicionMenu = () => {
        let bodyPosition = document.body.scrollTop || document.documentElement.scrollTop;
        // let scrollbarWidth = document.body.offsetWidth - bodyWidth;
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

    useEffect(() => {
        posicionMenu();
        try {
        document.body.addEventListener('scroll', posicionMenu);
        return () => {
            document.body.removeEventListener('scroll', posicionMenu);
        }
    } catch (error) {
        console.log("teste");
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
