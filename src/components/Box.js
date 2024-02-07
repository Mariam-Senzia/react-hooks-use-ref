import React, { useRef } from "react";

function Box() {
  const elementRef = useRef();

  function handleMeaseureClick() {
    const div = elementRef.current;
    console.log("Measurements: ", div.getBoundingClientRect());
  }

  return (
    <div ref={elementRef}>
      <h1>Box</h1>
      <button onClick={handleMeaseureClick}>Measure</button>
    </div>
  );
}

export default Box;
