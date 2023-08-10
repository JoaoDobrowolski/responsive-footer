import React, { useState } from 'react';
import './ButtonScreen.css';

export default function ButtonScreen() {
  const [simulation, setSimulation] = useState(false);

  return (
    <div>
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
    </div>
  );
}
