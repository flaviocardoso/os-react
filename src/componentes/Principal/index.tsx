import Navbar from 'componentes/Navbar';
import Rodape from 'componentes/Rodape';
import React from 'react';
import style from './Principal.module.scss';

const Principal: React.FC = () => {
    return (
        <>
        <Navbar />
        <main className={style.Principal}>
            <p>Contéudo</p>
        </main>
        <Rodape />
        </>
    );
}

export default Principal;