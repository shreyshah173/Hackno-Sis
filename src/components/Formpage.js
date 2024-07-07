import React, { useState } from 'react';
import axios from 'axios';

const Formpage = ({ user }) => {
  // console.log(user);
  const [answers, setAnswers] = useState({
    medicineOnTime: '',
    sleepTime: '',
    exercise: '',
    waterIntake: '',
    meals: '',
    stressLevel: '',
    alcoholConsumption: '',
    smoking: '',
    physicalPain: '',
    mood: ''
  });

  const [newq, setNewq] = useState('')
  const [response, setResponse] = useState('');
  const [nstatus, setNstatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prevAnswers => ({ ...prevAnswers, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // add conditions for checking all the items are filled or not 
    if (Object.values(answers).some(answer => answer === '')) {
      alert('Please fill all the fields');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/health/submit', {
        userId: user._id,
        answers
      });

      setAnswers({
        medicineOnTime: '',
        sleepTime: '',
        exercise: '',
        waterIntake: '',
        meals: '',
        stressLevel: '',
        alcoholConsumption: '',
        smoking: '',
        physicalPain: '',
        mood: ''
      });

      const res = await axios.post('http://localhost:5000/api/health/response', {
        userId: user._id,
        status: true, // or false based on some condition
      });
      setResponse(res.data.response);
      setNstatus(res.data.nstatus);
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  const newSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/health/additional', {
        userId: user._id,
        question: newq
      });
      setNewq('');
      setResponse(res.data.response);
      setNstatus(res.data.nstatus);
    } catch (error) {
      console.error('Error submitting additional question', error);
    }
  }

  return (
    <div style={{ marginTop: '150px' }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Have you taken medicine on time?</label>
          <input
            type="text"
            name="medicineOnTime"
            value={answers.medicineOnTime}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>How much time did you sleep?</label>
          <input
            type="text"
            name="sleepTime"
            value={answers.sleepTime}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>How often do you exercise?</label>
          <input
            type="text"
            name="exercise"
            value={answers.exercise}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>How many glasses of water did you drink today?</label>
          <input
            type="text"
            name="waterIntake"
            value={answers.waterIntake}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>How many meals did you have today?</label>
          <input
            type="text"
            name="meals"
            value={answers.meals}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>What is your current stress level (1-10)?</label>
          <input
            type="text"
            name="stressLevel"
            value={answers.stressLevel}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>How often do you consume alcohol?</label>
          <input
            type="text"
            name="alcoholConsumption"
            value={answers.alcoholConsumption}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Do you smoke?</label>
          <input
            type="text"
            name="smoking"
            value={answers.smoking}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Do you experience any physical pain?</label>
          <input
            type="text"
            name="physicalPain"
            value={answers.physicalPain}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>How would you describe your mood today?</label>
          <input
            type="text"
            name="mood"
            value={answers.mood}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* for positive response from ai */}
      {nstatus !== '' && nstatus && (
        <div>{response} god damm man</div>
      )}

      {/* for negative response from ai */}
      {nstatus !== '' && !nstatus && (
        <div>
          {response} fuck dude
          <input
            type='text'
            value={newq}
            onChange={e => setNewq(e.target.value)}
          />
          <button onClick={newSubmit}>Let's do this one more time</button>
        </div>
      )}
    </div>
  );
}

export default Formpage;
