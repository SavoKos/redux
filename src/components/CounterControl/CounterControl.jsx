import React from 'react';

import './CounterControl.scss';

const counterControl = props => (
  <div className="counter-control" onClick={props.clicked}>
    {props.label}
  </div>
);

export default counterControl;
