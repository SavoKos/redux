import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/action';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  state = {
    counter: 1,
  };

  render() {
    const liStyling = {
      width: 'fit-content',
      margin: 'auto',
      listStyle: 'none',
      fontSize: '20px',
      cursor: 'pointer',
    };

    let storedResults = '';
    if (this.props.results)
      storedResults = this.props.results.map(result => (
        <li
          style={liStyling}
          key={result.id}
          onClick={() => this.props.onDeleteResult(result.id)}
        >
          {result.value}
        </li>
      ));
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 15"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={this.props.onStoreResult}>Store Result</button>
        <ul>{storedResults}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    results: state.results,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actions.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actions.DECREMENT }),
    onAddCounter: () => dispatch({ type: actions.ADD, value: 10 }),
    onSubtractCounter: () => dispatch({ type: actions.SUBTRACT, value: 15 }),
    onStoreResult: () => dispatch({ type: actions.STORE_RESULT }),
    onDeleteResult: id => dispatch({ type: actions.DELETE_RESULT, id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
