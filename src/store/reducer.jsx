import * as actions from './action';

const initialState = {
  counter: 1,
  results: [],
};

const reducer = (state = initialState, { type, value, id }) => {
  switch (type) {
    case actions.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case actions.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case actions.ADD:
      return { ...state, counter: state.counter + value };
    case actions.SUBTRACT:
      return { ...state, counter: state.counter - value };
    case actions.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: +new Date(),
          value: state.counter,
        }),
      };
    case actions.DELETE_RESULT:
      const updatedResults = state.results.filter(result => result.id !== id);
      return { ...state, results: updatedResults };
    default:
      return state;
  }
};

export default reducer;
