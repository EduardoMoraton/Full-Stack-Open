import { useState } from 'react';
import StatsLine from './StatsLine';

const Statistics = (props) => {
  const totalFeedback = props.good + props.neutral + props.bad;
  const positivePercentage = totalFeedback === 0 ? 0 : (props.good / totalFeedback) * 100;

  return (
    <div>
      <h1>Statistics</h1>
      {totalFeedback === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <StatsLine text={"good"} value={props.good} />
          <StatsLine text={"neutral"} value={props.neutral} />
          <StatsLine text={"bad"} value={props.bad} />
          <StatsLine text={"average"} value={totalFeedback / 3} />
          <StatsLine text={"positive"} value={`${positivePercentage.toFixed(2)}%`} />
        </div>
      )}
    </div>
  );
}

export default Statistics;
