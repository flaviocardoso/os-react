import React from 'react';
import style from './Rodape.module.scss';

const Rodape: React.FC = () => {
    function dataAcima() {
        if (new Date().getFullYear() > 2023) {
            return '- ' + new Date().getFullYear();
        }
        return '';
    }

    return (
    <footer className={style.RodapeStyle}>
        <div id="direitosreservados">
            <p> &#169; FLAVIO CARDOSO / 2013 { dataAcima() }</p>
        </div>
    </footer>
    );
}

export default Rodape;