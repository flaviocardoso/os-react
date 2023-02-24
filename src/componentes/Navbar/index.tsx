import React from 'react';
import style from './Navbar.module.scss';
import ButtonHamburger from 'componentes/ButtonHamburger';
import ButtonLogout from 'componentes/ButtonLogout';

interface Props {
    onClick?: (() => void) | ((event: any) => void)
}

const Navbar: React.FC<Props> = ({ onClick }: Props) => {
    return (
        <header className={style.Navbar}>
            <nav>
                <ul role="navigation" id="globalnav">
                    <li>
                        <ButtonHamburger onClick={onClick} />
                    </li>
                    <li>LOGO</li>
                </ul>
                <ButtonLogout />
            </nav>   
        </header> 
    );
}

export default Navbar;