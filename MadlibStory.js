// src/components/MadlibStory.js

import React from 'react';

function MadlibStory({ inputs, onRestart }) {
  return (
    <div>
      <p>There was a {inputs.color} {inputs.noun1} who loved a {inputs.adjective} {inputs.noun2}.</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default MadlibStory;
