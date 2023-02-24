import React from 'react';
import style from './Footer.module.scss';

const Rodape: React.FC = () => {
    function dataAcima() {
        if (new Date().getFullYear() > 2023) {
            return '- ' + new Date().getFullYear();
        }
        return '';
    }

    return (
    <footer className={style.FooterStyle}>
        <div id="direitosreservados">
            <p> &#169;flaviocardoso 2023{ dataAcima() }</p>
        </div>
    </footer>
    );
}

export default Rodape;