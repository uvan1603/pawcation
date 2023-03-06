import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [loggedIn, setIsLoggedIn] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (event) => {
    event.preventDefault();

    let length = 0;
    const response = await axios.get("http://localhost:3004/userData");
    response.data.map((data) => {
      length += 1;
      if (
        data.email === formData.email &&
        data.password === formData.password
      ) {
        navigate("/");
      } else if (response.data.length === length) setIsLoggedIn(2);
    });
    setFormData({
      email: "",
      password: "",
    });
    console.log(formData);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="email">E-Mail</label>
        <input
          type="text"
          name="email"
          onChange={handleInputChange}
          value={formData.email}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      {loggedIn === 2 ? <span>Enter a valid password</span> : null}
      <button onSubmit={submitHandler}>Submit</button>
    </form>
  );
}
