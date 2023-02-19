import React from 'react';
import style from 'pages/App/App.module.scss';
import Principal from 'componentes/Principal';

const App: React.FC = () => {
  return (
    <div className={style.AppStyle}>
      <Principal />
    </div>
  );
}

export default App;
