// src/components/Madlib.js

import React, { useState } from 'react';
import MadlibForm from './MadlibForm';
import MadlibStory from './MadlibStory';

function Madlib() {
  const [inputs, setInputs] = useState({ noun1: '', noun2: '', adjective: '', color: '' });
  const [showStory, setShowStory] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.noun1 && inputs.noun2 && inputs.adjective && inputs.color) {
      setShowStory(true);
    }
  };

  const handleRestart = () => {
    setInputs({ noun1: '', noun2: '', adjective: '', color: '' });
    setShowStory(false);
  };

  return (
    <div>
      <h1>Mad Libs!</h1>
      {showStory ? (
        <MadlibStory inputs={inputs} onRestart={handleRestart} />
      ) : (
        <MadlibForm inputs={inputs} onChange={handleChange} onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default Madlib;
