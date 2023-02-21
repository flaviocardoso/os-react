import React from 'react';
import Button from 'componentes/Button';
import style from './Navbar.module.scss';

interface Props {
    onClick?: (() => void) | ((event: any) => void)
}

const Navbar: React.FC<Props> = ({ onClick }: Props) => {
    return (
        <header className={style.Navbar}>
            <nav>
                <ul role="navigation" id="globalnav">
                    <li>
                        <Button type='button' onClick={onClick} style={style.ButtonNavLogout}>
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