import React, { useState } from "react";
import "./Letter.css";

function Letter(props) {

    const {classBig, setClass} = props;


    const [letterClasses, setLetterClasses] = useState(['letter']);
    const [letter1Classes, setLetter1Classes] = useState(['letter1']);
    const [isClicked, setIsClicked] = useState(false);
    const [isClicked1, setIsClicked1] = useState(false);

    const handleLetterClick = () => {
    if (!isClicked){
         setLetterClasses(['letter', 'click'])
        }else{
            setLetterClasses(['letter'])
        }
        setIsClicked(!isClicked);
    }

    const handleLetterClick1 = () => {
        if (!isClicked1){
             setLetter1Classes(['letter1', 'click1'])
            }else{
                setLetter1Classes(['letter1'])
            }
            setIsClicked1(!isClicked1);
        }

    const handle = () => {
      console.log('clicked on big letter');
      setClass(['letter', 'close']);
    }    

    return (
        <div
          className={classBig.join(' ')}
          onClick={handle}
        ></div>
    );
}

export default Letter;
