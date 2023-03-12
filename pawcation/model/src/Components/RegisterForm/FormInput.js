import React, { useState } from "react";
import "./RegisterForm.css";
const FormInput = (props) => {
  const { label, onChange, errormessage, id, ...inputprops } = props;
  const [focused, setfocused] = useState(false);

  const handleFocus = (e) => {
    setfocused(true);
  };

  return (
    <div>
      <label>{label}</label>
      <input
        {...inputprops}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        onFocus={() =>
          inputprops.name === "confirmpassword" && setfocused(true)
        }
      />
      <span>{errormessage}</span>
    </div>
  );
};

export default FormInput;