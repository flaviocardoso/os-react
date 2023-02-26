import React from 'react';
import style from './Navbar.module.scss';
import ButtonHamburger from 'componentes/ButtonHamburger';
import ButtonLogout from 'componentes/ButtonLogout';

const Navbar: React.FC = () => {
    return (
        <header className={style.Navbar}>
            <nav>
                <ul role="navigation" id="globalnav">
                    <li>
                        <ButtonHamburger />
                    </li>
                    <li>LOGO</li>
                </ul>
                <ButtonLogout />
            </nav>   
        </header> 
    );
}

export default Navbar;
