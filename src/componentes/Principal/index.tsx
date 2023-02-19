import Navbar from 'componentes/Navbar';
import Rodape from 'componentes/Rodape';
import React from 'react';
import style from './Principal.module.scss';

const Principal: React.FC = () => {
    return (
        <article className={style.PrincipalStyle}>
            <Navbar />
            <main>
                <article>
                    <header>DASHBOARD</header>
                    
                </article>
            </main>
            <Rodape />
        </article> 
    );
}

export default Principal;