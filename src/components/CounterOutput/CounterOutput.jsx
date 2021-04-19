import React from 'react';

import './CounterOutput.scss';

const counterOutput = props => (
  <div className="counter-output">Current Counter: {props.value}</div>
);

export default counterOutput;
