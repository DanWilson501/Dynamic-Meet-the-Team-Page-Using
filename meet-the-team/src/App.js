// U5223-1368

import React from 'react';
import './App.css';
import Gallery from './components/Gallery';
import teamMembers from './data';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery teamMembers={teamMembers} />
    </div>
  );
}

export default App;
