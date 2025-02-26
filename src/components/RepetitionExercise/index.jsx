import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RepetitionExercise() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="app-container"> {/* Keeps everything centered */}
      <h2>Repetition Exercise</h2>
      <p>Repetitions: {count}</p>
      <div className="exercise-buttons"> {/* Added class for styling */}
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <button className="back-button" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}

export default RepetitionExercise;
