import React from "react";
import { useNavigate } from "react-router-dom";

const MenuScreen = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Exercise Tracker</h1>
      <button onClick={() => navigate("/exercise/reps/Push-Ups")}>
        Push-Ups (Reps)
      </button>
      <button onClick={() => navigate("/exercise/duration/Jump Rope")}>
        Jump Rope (Duration)
      </button>
      <button onClick={() => navigate("/exercise/running")}>
        Running Exercise
      </button>
    </div>
  );
};

export default MenuScreen;
