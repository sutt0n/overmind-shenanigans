import React from 'react';
import './App.css';
import { useAppState } from './presenter';
import { FavoriteStarships } from './views/FavoriteStarships';
import { Starships } from './views/Starships';

function App() {
  const { currentPage } = useAppState();

  return (
    <div className="App">
      <header className="App-header">
        {currentPage === 'HOME' && <FavoriteStarships />}
        {currentPage === 'STARSHIPS' && <Starships />}
      </header>
    </div>
  );
}

export default App;
