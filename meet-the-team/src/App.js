// U5223-1368

import React from 'react';
import './App.css';
import Gallery from './components/Gallery';
import teamMembers from './data';

function App() {
  return (
    <div className="App">
      <Gallery teamMembers={teamMembers} />
    </div>
  );
}

export default App;
