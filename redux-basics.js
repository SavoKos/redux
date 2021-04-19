const { unstable_renderSubtreeIntoContainer } = require('react-dom');
const redux = require('redux');

const createStore = redux.createStore;

const initialStore = {
  counter: 0,
};

// reducer
const rootReducer = (state = initialStore, action) => {
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }

  return state;
};

// store
const store = createStore(rootReducer);
console.log(store.getState());

// subscription
store.subscribe(() => {
  console.log('[SUBSCRIBE]', store.getState());
});

// dispatch
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());
