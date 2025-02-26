import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./components/RunningExercise"; // Import new component
import './App.css';


function Home() {
  return (
    <div className="app-container">
      <h1>Welcome to the Exercise App</h1>
      <div className="home-buttons">
        <Link to="/exercise/reps/Repetition">
          <button className="nav-button">Go to Repetition Exercise</button>
        </Link>
        <Link to="/exercise/duration/Duration">
          <button className="nav-button">Go to Duration Exercise</button>
        </Link>
        <Link to="/exercise/running">
          <button className="nav-button">Go to Running Exercise</button>
        </Link>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/reps/:name" element={<RepetitionExercise />} />
        <Route path="/exercise/duration/:name" element={<DurationExercise />} />
        <Route path="/exercise/running" element={<RunningExercise />} /> {/* New Route */}
      </Routes>
    </Router>
  );
};

export default App;
