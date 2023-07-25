import Input from "./Input";

import usePinInput from "../hooks/usePinInput";

function PinInput(props) {
  const [pin, setPin] = usePinInput();

  return (
    <Input
      value={pin}
      onChange={(e) => setPin(e.target.value)}
      {...props}
    />
  );
}

export default PinInput;
