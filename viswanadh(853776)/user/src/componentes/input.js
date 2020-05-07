import React from "react";
const Input = ({ inputName, value, type, handleInputField, label }) => {
 
  return (
    <div>
      <label htmlFor={inputName}>{label}</label>
      <input
        value={value}
        type={type}
        className="form-control"
        id={inputName}
        aria-describedby="emailHelp"
        onChange={handleInputField}
        name={inputName}
        required
        
      />
      
    </div>
  );
};

export default Input;
