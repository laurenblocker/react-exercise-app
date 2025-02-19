import React, { useState } from 'react';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseSelect = (exerciseName) => {
    setSelectedExercise(exerciseName);
  };

  return (
    <div>
      <h1>Exercise Tracker</h1>
      <div>
        <button onClick={() => handleExerciseSelect('Push-ups')}>
          Push-ups (Repetition)
        </button>
        <button onClick={() => handleExerciseSelect('Running')}>
          Running (Duration)
        </button>
      </div>

      {/* Conditionally render exercise components */}
      {selectedExercise === 'Push-ups' && (
        <RepetitionExercise name="Push-ups" />
      )}
      {selectedExercise === 'Running' && <DurationExercise name="Running" />}
    </div>
  );
}

export default App;
