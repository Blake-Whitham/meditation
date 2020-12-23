
import { useState, useEffect } from 'react';

import { Breather } from './breather'

export const Story:React.FC = () => {
  const [time, setTime] = useState(3);


  useEffect(() => {
    if (time > -30) {
      setTimeout(() => {
        let newTime = time - 1
        setTime(newTime);
      }, 3000);
    }
   },[time]);

   const display:Function = () => {
    if (time > 0) {
      return <h1>{time}</h1>
    }
    if (time === 0) {
      return <h1>Breath out fully and hold</h1>
    }
    if (time === -1) {
      return <h1>Breath with the image</h1>
    }
    if (time < -1 && time > -26) {
      return <Breather size={window.innerWidth * .75} flow={1} />
    }
    if (time <= -26 && time > -28) {
      return <h1>How did that feel?</h1>
    }
    if (time === -28) {
      window.location.href = "https://www.google.com";
      return;
    }
  }

  return (

    <div className="container">
      {display()}
    </div>
  )
}
