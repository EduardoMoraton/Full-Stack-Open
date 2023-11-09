import { useState } from 'react';

const GiveFeedBack = (props) => {
  return (
    <div>
        <h1>Give feedback</h1>
        <button onClick={props.addGood} > good </button>
        <button onClick={props.addNeutral} > neutral </button>
        <button onClick={props.addBad} > bad </button>
    </div>
  );
}

export default GiveFeedBack;