import React from 'react';
import Dashboard from 'componentes/Dashboard';
import { RecoilRoot } from 'recoil';
import DebugObserver from 'componentes/DebugObserver';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <DebugObserver />
      <Dashboard />
    </RecoilRoot>
  );
}

export default App;
