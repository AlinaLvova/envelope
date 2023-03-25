import React, { useState } from "react";

function Letter(props) {
  const [clickState, setClickState] = useState(false);

  function handleClick(e){
    console.log(clickState);
    setClickState(!clickState);
  }

  return (
    <div
      className={`letter ${props.isOpen ? "open" : ""} ${
        props.isClose ? "close" : ""
      }`} onClick={handleClick}
    >
      <div className={`${clickState ? "click" : ""} flipper`} >
        <div className="front-flip">
          <button className="closeButton" onClick={props.onClose}>
          <div id="reset">
            <svg
              className="btn-close"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
            </svg>
          </div>
          </button>

          <h2>Front Content</h2>
        </div>
        <div className="back">
           <button className="closeButton" onClick={props.onClose}>
           <div id="reset">
            <svg
              className="btn-close"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
            </svg>
          </div>
           </button>

          <div className="text">
          <h2>Дорогой друг</h2>
          <p>
            Я хочу выразить огромную благодарность за то, что ты есть в моей
            жизни. Твоя поддержка, дружба и верность - это неоценимые качества,
            которые помогают мне преодолевать жизненные трудности. Я счастлив,
            что у меня есть друг, которому я могу доверять и с кем я могу делить
            радости и горести. Ты делаешь мою жизнь ярче и насыщеннее, и я не
            могу представить свою жизнь без те
          </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Letter;
