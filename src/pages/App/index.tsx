import React, { Suspense } from 'react';
import Dashboard from 'componentes/Dashboard';
import { RecoilRoot } from 'recoil';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Suspense fallback='Está carregando'>
        <Dashboard />
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
