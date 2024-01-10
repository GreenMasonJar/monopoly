import React from 'react';
import './App.css';
import Board from './Components/board/board'
import Popup from './Components/popup/popup';
import { useState } from 'react';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      <Board/>
      <button onClick={() => setButtonPopup(true)}>Start Game</button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>My popup!</h3>
      </Popup>
    </div>
  );
}

export default App;
