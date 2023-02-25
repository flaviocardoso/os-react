import React from 'react';
import style from './Navbar.module.scss';
import ButtonHamburger from 'componentes/ButtonHamburger';
import ButtonLogout from 'componentes/ButtonLogout';

interface Props {
    hasX: Boolean,
    onClick?: (() => void) | ((event: any) => void)
}

const Navbar: React.FC<Props> = ({ hasX, onClick }: Props) => {
    return (
        <header className={style.Navbar}>
            <nav>
                <ul role="navigation" id="globalnav">
                    <li>
                        <ButtonHamburger hasX={hasX} onClick={onClick} />
                    </li>
                    <li>LOGO</li>
                </ul>
                <ButtonLogout />
            </nav>   
        </header> 
    );
}

export default Navbar;
