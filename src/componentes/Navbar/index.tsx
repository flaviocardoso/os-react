import React from 'react';
import style from './Navbar.module.scss';

const Navbar: React.FC = () => {
    return (
        <header className={style.Navbar}>
            <nav>
                <ul role="navigation" id="globalnav">
                    <li>item1</li>
                    <li>item2</li>
                    <li>item3</li>
                    <li>item4</li>
                    <li>item5</li>
                </ul>
                <div id="globalpaineil">
                    sair
                </div>
            </nav>   
        </header> 
    );
}

export default Navbar;