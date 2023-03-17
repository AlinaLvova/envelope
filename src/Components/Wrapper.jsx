import React from 'react';
import './Wrapper.css';
import Letter from './Letter.jsx';
import Envelope from './Envelope.jsx';

function Wrapper() {
  return (
      <div className="wrapper">
        <Envelope />
      </div>
  );
}

export default Wrapper; 