// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// initial state
const initialState = {
  value: 0,
};

// create reducer function
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - 1,
    };
  } else {
    return state;
  }
};

// create redux store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value;
};

// update UI intially
render();

store.subscribe(render);

// listening button action
incrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "increment",
  });
});

decrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});
