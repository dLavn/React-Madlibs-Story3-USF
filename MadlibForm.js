// src/components/MadlibForm.js

import React from 'react';

function MadlibForm({ inputs, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="noun1"
        placeholder="noun"
        value={inputs.noun1}
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="noun2"
        placeholder="noun"
        value={inputs.noun2}
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="adjective"
        placeholder="adjective"
        value={inputs.adjective}
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="color"
        placeholder="color"
        value={inputs.color}
        onChange={onChange}
        required
      />
      <button type="submit">Get Story</button>
    </form>
  );
}

export default MadlibForm;
