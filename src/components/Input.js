import "./Input.css";

function Input({label, ...props}) {
  return (
    <div className="input-row">
      <h5>{label}</h5>
      <input {...props}></input>
    </div>
  );
}

export default Input;
