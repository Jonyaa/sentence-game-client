// Hook that simplifies input inserting for room pin
// It enforces the input to be no longer than 4 digits long
// Should be used just like state for inputs

import { useState } from "react";

const usePinInput = () => {
  const [input, setInput] = useState("");

  const setLegalPin = (value) => {
    if (value.length < 5) {
      setInput(value);
    }
  };

  return [input, setLegalPin];
};

export default usePinInput;
