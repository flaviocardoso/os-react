import Navbar from 'componentes/Navbar';
import Rodape from 'componentes/Footer';
import React, { useState } from 'react';
import style from './Dashboard.module.scss';
import Menu from 'componentes/Menu';

const Dashboard: React.FC = () => {
    const [visivel, setVisibel] = useState(false);
    const toggleMenu = (e: any) => {
        setVisibel(!visivel);
        e.stopPropagation();
    }

    return (
        <article className={style.DashboardStyle}>
            <Menu visivel={visivel} onClick={toggleMenu} />
            <Navbar onClick={toggleMenu} />
            <main>
                <article >
                    <header>DASHBOARD</header>    
                </article>
            </main>
            <Rodape />
        </article> 
    );
}

export default Dashboard;