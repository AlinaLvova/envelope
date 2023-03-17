import React, { useState, useEffect, useRef } from 'react';
import './Envelope.css';
import Letter from './Letter';
import LetterAnimation from './LetterAnimation';

function Envelope() {

  const [classBig, setClass] = useState(['letter', 'close']);

  const [envelopeClasses, setEnvelopeClasses] = useState(['envelope', 'close']);
  const [isOpenEnvelope, setIsOpenEnvelope] = useState(false);

  const [letter1Classes, setLetter1Classes] = useState(['letter-animation']);

  const handleEnvelopeClick = () => {

    console.log('clicked on flap=', isOpenEnvelope);
    if (!isOpenEnvelope){
        setEnvelopeClasses(['envelope', 'open']);
        setTimeout(() => {
          setLetter1Classes(['letter-animation', 'open-letter']);
        }, 500);
        setTimeout(() => {
          setClass(['letter']);
        }, 2500);
    }
    setIsOpenEnvelope(!isOpenEnvelope);
  }

  // const handleLetterClick1 = (e) => {
  //   if (!isClicked1){
  //      console.log("closing");
  //        setLetter1Classes(['letter1', 'click1'])
  //       }else{
  //         console.log("opening");
  //       //  setLetter1Classes(['letter1', 'click2'])
  //       }
  //   setIsClicked1(!isClicked1);
  // }

  const handle = () => {
    if(isOpenEnvelope){
      setLetter1Classes(['letter-animation', 'close-letter']);
      setTimeout(() => {
        setEnvelopeClasses(['envelope', 'close']);
      }, 1800);
      setIsOpenEnvelope(!isOpenEnvelope);
    }
  }

  return (
    <div onClick={handle}>
      <div className={envelopeClasses.join(' ')} >
          <div className="flap" onClick={handleEnvelopeClick} onDoubleClick={handleEnvelopeClick}></div>
          <div className="pocket"></div>
          {/* <div className={letter1Classes.join(' ')}>letter-anim</div> */}
          <LetterAnimation letterAClasses={letter1Classes} setLetterAClasses={setLetter1Classes}/>
          {/* <div className="letter">letter</div> */}
        <p>envelope</p>
      </div>
      <Letter classBig={classBig} setClass={setClass}/>
    </div>
  );
  }

export default Envelope; 



//const [lastClickTime, setLastClickTime] = useState(Date.now());

//в обработчик
// setLastClickTime(Date.now());

// useEffect(() => {
//   const timer = setInterval(() => {
//     if (Date.now() - lastClickTime > 5000 && !isLetterScaled && !isOpenEnvelope) {
//       console.log('No clicks for 3 seconds!');
//       setLetter1Classes(['letter1', 'shake']);
//     }
//     else if(!isOpenEnvelope){
//       setLetter1Classes(['letter1']);
//     }
//   }, 1000);
//   return () => clearInterval(timer);
// }, [lastClickTime]);
