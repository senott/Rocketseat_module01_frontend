import React from 'react';

import Header from './components/Header';

function App() { 
  return (
    // FRAGMENT
    <>
      < Header title="Homepage">
        <p>Texto passado como children para o componente.</p>
      </ Header>
      < Header title="Projects">
        <h3>Aqui virão os títulos dos projetos o/</h3>
      </ Header>
    </>
  );
}

export default App;