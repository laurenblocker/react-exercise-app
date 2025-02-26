import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RunningExercise() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startStopTimer = () => setIsRunning(!isRunning);

  const recordLap = () => {
    setLaps([...laps, time]);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="app-container">
      <h2>Running Exercise</h2>
      <p>Time: {formatTime(time)}</p>
      <button onClick={startStopTimer}>{isRunning ? "Pause" : "Start"}</button>
      <button onClick={recordLap} disabled={!isRunning}>
        Record Lap
      </button>
      <button onClick={resetTimer}>Reset</button>

      <h3>Laps</h3>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>Lap {index + 1}: {formatTime(lap)}</li>
        ))}
      </ul>

      <button className="back-button" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}

export default RunningExercise;
