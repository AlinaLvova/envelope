import React, { useState, useEffect, useRef } from 'react';

function Envelope(props) {

  return (
      <div className={`${props.isActiveMouse ? '' : 'shake'} envelope ${props.isOpen ? 'open' : 'close'}`} >
          <div className="flap" onClick={props.onFlapClick}></div>
          <div className="pocket">
            <div className="tringle-1"></div>
            <div className="tringle-2"></div>
            <div className="tringle-3" id="tr1"></div>
          </div>
          {props.children}
      </div>
  );
  }

export default Envelope; 
