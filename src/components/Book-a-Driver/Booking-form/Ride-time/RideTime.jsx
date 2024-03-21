import React, { useState, useEffect } from "react";
import "./RideTime.css";
import { Link, useNavigate } from "react-router-dom";
function RideTime() {
  const navigate = useNavigate();

  const [displayTime, setDisplayTime] = useState("00:00:00:00");
  const [timer, setTimer] = useState(null);
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState("");

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
    const StartOtp = localStorage.getItem("StartOtp");
    if (StartOtp) {
      if (!isRunning) {
        setStartTime(Date.now() - elapsedTime);
        setIsRunning(true);
      }
      setError("");
    } else {
      setError("Driver not Started the Ride");
    }
  };

  let time = 0;

  const stop = () => {
    const FinishCode = localStorage.getItem("FinishCode");
    if (FinishCode) {
      if (isRunning) {
        clearInterval(timer);
        setIsRunning(false);
        navigate("/reached-destination");
        setElapsedTime(Date.now() - startTime);
        time = Date.now() - startTime;
        console.log(time);
        localStorage.setItem("rideTime",(( time/1000)/3600));

      }
      setError("");
    } else {
      setError(
        "This journey not finished !... Tell the Driver to Cancel the Trip"
      );
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

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    setDisplayTime(`${hours}:${minutes}:${seconds}:${milliseconds}`);
  };

  return (
    <div className="ridetime">
      <h1 id="myh1">Ride Time</h1>
      <h5 className="diver-conformation">
        {error == "" ? (
          <span className="success">{}</span>
        ) : (
          <span className="error">{error}</span>
        )}
      </h5>
      <div id="container">
        <div id="display">{displayTime}</div>
        <div id="controls">
          <button id="startBtn" onClick={start}>
            Start
          </button>
          {/* <Link to="/reached-destination"> */}
          <button id="stopBtn" onClick={stop}>
            Stop
          </button>
          {/* </Link> */}
          {/* <button id="resetBtn" onClick={reset}>Reset</button> */}
        </div>
      </div>
    </div>
  );
}

export default RideTime;
