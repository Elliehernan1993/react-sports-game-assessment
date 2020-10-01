import React from 'react';
import Game from './components/Game'
import logo from './logo.svg';
import raccoon from './assets/images/raccoon.png'
import bunny from './assets/images/bunny.png'
import hound from './assets/images/hound.png'
import squirrel from './assets/images/squirrel.png'
import './App.css';

function App() {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: raccoon
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: squirrel
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: bunny
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: hound
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

export default App;
