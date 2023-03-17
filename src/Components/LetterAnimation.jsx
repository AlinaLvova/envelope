import React, { useState, useImperativeHandle, forwardRef} from "react";
import './LetterAnimation.css';

function LetterAnimation(props) {
    const {state, setState} = props;
    const {letterAClasses, setLetterAClasses} = props;

    const [isClicked1, setIsClicked1] = useState(false);

    const handle = () =>{
      console.log('click=', letterAClasses);
    }

    return (
        <div
          className={letterAClasses.join(' ')} onClick={handle}
        ></div>
    );
}

export default LetterAnimation;
