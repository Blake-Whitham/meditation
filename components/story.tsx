
import { useState, useEffect } from 'react';

import { Breather } from './breather'

export const Story:React.FC = () => {
  const [time, setTime] = useState(3);


  useEffect(() => {
    if (time > -2) {
      setTimeout(() => {
        let newTime = time - 1
        setTime(newTime);
      }, 3000);
      return
    }
    if (time > -48) {
      setTimeout(() => {
        let newTime = time - 1
        setTime(newTime);
      }, 1000);
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
    if (time < -1 && time > -46) {
      return <Breather size={window.innerWidth * .75} clock={time} />
    }
    if (time <= -46 && time > -48) {
      return <h1>How did that feel?</h1>
    }
    if (time === -48) {
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
