import { useState } from 'react';
import './App.css';
import GiveFeedBack from './components/GiveFeedBack';
import Statistics from './components/Statistics';

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addTo = (type, value) => {
    type(value+=1)
  }

  return (
    <div>
      <GiveFeedBack addGood={() => addTo(setGood, good)} addNeutral={()=>addTo(setNeutral, neutral)} addBad={()=>addTo(setBad, bad)}> </GiveFeedBack>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  );
}

export default App;
