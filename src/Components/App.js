import { useState , Helmet, useRef, useEffect} from 'react';

import Envelope from './Envelope';
import Letter from './Letter';

function App() {
  const [isOpenEnvelope, setIsOpenEnvelope] = useState(false);
  const [isOpenLetter, setIsOpenLetter] = useState(false);
  const [isCloseLetter, setIsCloseLetter] = useState(false);
  const [isActiveMouse, setisActiveMouse] = useState(true);


  const timerRef = useRef(null);
  const [lastMoveTime, setLastMoveTime] = useState(Date.now());

  // useEffect(() => {
  //   function handleMouseMove() {
  //     setLastMoveTime(Date.now());
  //   }

  //   document.addEventListener("mousemove", handleMouseMove);

  //   // Очищаем таймер при каждом движении мыши
  //   clearTimeout(timerRef.current);

  //   // Устанавливаем новый таймер на 3 секунды
  //   timerRef.current = setTimeout(() => {
  //     const now = Date.now();

  //     // Если прошло более 3 секунд с последнего движения мыши, вызываем функцию обратного вызова
  //     if (now - lastMoveTime >= 3000) {
  //       if (!isOpenEnvelope) {
  //         setisActiveMouse(false);
  //       }
  //     }
  //   }, 3000);

  //   // Возвращаем функцию очистки
  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //     clearTimeout(timerRef.current);
  //   };
  // }, [lastMoveTime, isActiveMouse]);


  useEffect(() => {
      if (!isOpenEnvelope) {
        setisActiveMouse(false);
      }
  },[isOpenLetter])

  const handleEnvelopeClick = () => {
    setisActiveMouse(true);
    setIsOpenEnvelope(true);
    setTimeout(() => {
      setIsOpenLetter(true);
      setIsCloseLetter(false);
    }, 500);
  };

  const closeEnvelope = (e) => {
    e.stopPropagation();
    setIsOpenLetter(false);
    setIsCloseLetter(true);
    setTimeout(() => {
      setIsOpenEnvelope(false);
    }, 1900);
    setTimeout(() => {
      setisActiveMouse(false);
    }, 6000);
  };

  return (
    <div>
      {/* <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet> */}
      <div className="page">
        <div className="page__container">
          <section className="header"></section>
          <section className="main">
            <div className="wrapper">
              <Envelope
                isOpen={isOpenEnvelope}
                onFlapClick={handleEnvelopeClick}
                isActiveMouse={isActiveMouse}
              >
              <Letter isOpen={isOpenLetter} isClose={isCloseLetter} onClose={closeEnvelope}></Letter>
              </Envelope>
            </div>
          </section>
          <section className="footer"></section>
        </div>
      </div>
    </div>
  );
}

export default App;
