import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };

  const reset = () => {
    setCounter(0);
  };
  return (
    <div className="counter">
      <h1> React Counter </h1>
      <span className="counter__output">{counter}</span>
      <span className="btn__container">
        <button className="control__btn" onClick={increase}>
          +
        </button>
        <button className="control__btn" onClick={decrease}>
          -
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </span>
    </div>
  );
}

export default Counter;
