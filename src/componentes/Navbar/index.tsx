import React from 'react';
import Button from 'componentes/Button';
import style from './Navbar.module.scss';

const Navbar: React.FC = () => {
    return (
        <header className={style.Navbar}>
            <nav>
                <ul role="navigation" id="globalnav">
                    <li>
                        <Button type='button' style={style.ButtonNavLogout}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </Button>
                    </li>
                    <li>LOGO</li>
                </ul>
                <Button type='button' style={style.ButtonNavLogout}>SAIR</Button>
            </nav>   
        </header> 
    );
}

export default Navbar;