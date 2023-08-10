import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
import './global.css';

function App() {
  const [simulation, setSimulation] = useState(false);

  return (
    <div className="app">
      <button
        className="button-simulation"
        type="button"
        onClick={() => setSimulation(!simulation)}
      >
        Simulate {!simulation ? 'Expanded' : 'Reduced'} Screen
      </button>
      {simulation && (
        <div className="container-simulation" />
      )}
      <div className="content" />
      <Footer />
    </div>
  );
}

export default App;
