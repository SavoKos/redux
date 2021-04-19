const initialState = {
  counter: 1,
};

const reducer = (state = initialState, { type, value }) => {
  switch (type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    case 'ADD':
      return { ...state, counter: state.counter + value };
    case 'SUBSTRACT':
      return { ...state, counter: state.counter - value };
    default:
      return state;
  }
};

export default reducer;
