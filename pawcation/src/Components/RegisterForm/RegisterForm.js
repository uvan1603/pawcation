import React, { useState } from "react";
import FormInput from "./FormInput";
import "./RegisterForm.css";
import "react-multiple-select-dropdown-lite/dist/index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errormessage:
        "Username should be between 3-20 characters and shouldn't include any special characters",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,20}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      errormessage: "It should be a valid email address!",
      label: "Email",
      pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "Password",
      placeholder: "Password",
      errormessage:
        "Password should be of atleast 8-20 characters and must include atleast 1 letter, 1 number and 1 special character",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm Password",
      errormessage: "Password don't match",
      label: "Confirm Password",
      pattern: formData.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/signin")
    axios.post("http://localhost:3000/userData", formData);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form className="form" onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={formData[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}
