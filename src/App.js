import React, { useState } from 'react';

import Header from './components/Header';
import './App.css'
import backgroundImage from './assets/background.jpg';

function App() { 

  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  function handleAddProject() { 
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }

  return (
    // FRAGMENT
    <>
      < Header title="Projects" />

      <img src={ backgroundImage } alt="Landscape" width={500}/>

      <ul>
        { projects.map(project => <li key={ project }>{ project }</li>) }
      </ul>

      <button type="button" onClick={ handleAddProject }>Adicionar projeto</button>
    </>
  );
}

export default App;