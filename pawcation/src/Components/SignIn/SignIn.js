import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
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
    const response = await axios.get("http://localhost:3000/userData");
    response.data.forEach((data) => {
      length += 1;
      if (
        data.email === formData.email &&
        data.password === formData.password
      ) {
        navigate("/");
      } else if (response.data.length === length) {
        window.alert('Incorrect email or password')
        setIsLoggedIn(2);
      }
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
    <div style={{ alignContent: "center" }}>
      <form className="form" onSubmit={submitHandler}>
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        {loggedIn === 2 ? <span>Enter a valid password</span> : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
