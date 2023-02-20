import Navbar from 'componentes/Navbar';
import Rodape from 'componentes/Footer';
import React from 'react';
import style from './Dashboard.module.scss';

const Principal: React.FC = () => {
    return (
        <article className={style.DashboardStyle}>
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