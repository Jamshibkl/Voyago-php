import React, { useState, useEffect } from 'react'
import "./RideTime.css";

function RideTime() {
    const [displayTime, setDisplayTime] = useState('00:00:00:00');
    const [timer, setTimer] = useState(null);
    const [startTime, setStartTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //       window.location.reload();
    //     }, 2000);
    
    //     return () => clearTimeout(timeout);
    //   }, []);
    
  
    useEffect(() => {
      if (isRunning) {
        const interval = setInterval(update, 10);
        return () => clearInterval(interval);
      }
    }, [isRunning, elapsedTime]);
  
    const start = () => {
      if (!isRunning) {
        setStartTime(Date.now() - elapsedTime);
        setIsRunning(true);
      }
    };
  
    let time=0;

    const stop = () => {
      if (isRunning) {
        clearInterval(timer);
        setIsRunning(false);
        setElapsedTime(Date.now() - startTime);
        time= (Date.now() - startTime);
        console.log(time)
      }
    };
  
    // const reset = () => {
    //   clearInterval(timer);
    //   setStartTime(0);
    //   setElapsedTime(0);
    //   setIsRunning(false);
    //   setDisplayTime('00:00:00:00');
    // };
  
    const update = () => {
      const currentTime = Date.now();
      const newElapsedTime = currentTime - startTime;
  
      let hours = Math.floor(newElapsedTime / (1000 * 60 * 60));
      let minutes = Math.floor((newElapsedTime / (1000 * 60)) % 60);
      let seconds = Math.floor((newElapsedTime / 1000) % 60);
      let milliseconds = Math.floor((newElapsedTime % 1000) / 10);
  
      hours = String(hours).padStart(2, '0');
      minutes = String(minutes).padStart(2, '0');
      seconds = String(seconds).padStart(2, '0');
      milliseconds = String(milliseconds).padStart(2, '0');
  
      setDisplayTime(`${hours}:${minutes}:${seconds}:${milliseconds}`);
    };
  
    return (
      <div className='ridetime'>
        <h1 id="myh1">Ride Time</h1>
        <div id="container">
          <div id="display">{displayTime}</div>
          <div id="controls">
            <button id="startBtn" onClick={start}>Start</button>
            <button id="stopBtn" onClick={stop}>Stop</button>
            {/* <button id="resetBtn" onClick={reset}>Reset</button> */}
          </div>
        </div>
      </div>
    );
}

export default RideTime
