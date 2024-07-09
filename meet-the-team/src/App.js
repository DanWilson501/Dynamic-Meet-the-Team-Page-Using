import React from 'react';
import './App.css';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Gallery teamMembers={teamMembers} />
    </div>
  );
}

export default App;
