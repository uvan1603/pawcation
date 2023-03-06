import axios from "axios";
import React, { useState } from "react";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";

export default function RegisterForm() {
  const [fnameIsValid, setFnameIsValid] = useState(true);
  const [lnameIsValid, setLnameIsValid] = useState(true);

  const [fnameTouched, setFnameTouched] = useState(false);
  const [lnameTouched, setLnameTouched] = useState(false);

  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    email: "",
    password: "",
    phoneNum: "",
    selectedOptions: [],
    dogData : {
      name: "",
      age:"",
      gender: "",
      photo: ""
    },
    catData : {
      name: "",
      age:"",
      gender: "",
      photo: ""
    },
  });

  const petList = [
    {
      value: "Dog",
      label: "Dog",
    },
    {
      value: "Cat",
      label: "Cat",
    },
  ];

  const handleSelectChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      selectedOptions: value,
    }));
    console.log(value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const inputBlurHandler = (event) => {};

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (formData.Fname.trim() === "") {
      setFnameIsValid(false);
      return;
    } else if (formData.Lname.trim() === "") {
      setLnameIsValid(false);
      return;
    }

    setFnameIsValid(true);
    setLnameIsValid(true);

    axios.post("http://localhost:3004/userData", formData);
    setFormData({
      Fname: "",
      Lname: "",
      email: "",
      password: "",
      phoneNum: "",
      selectedOptions: [],
      dogData : {
        name: "",
        age:"",
        gender: "",
        photo: ""
      },
      catData : {
        name: "",
        age:"",
        gender: "",
        photo: ""
      }
    });
    console.log(formData);
  };

  return (
    <div>
      <h1>Register component</h1>
      <form autoComplete="off" onSubmit={formSubmissionHandler}>
        <div>
          <div>
            <label htmlFor="Fname">First Name</label>
            <input
              type="text"
              name="Fname"
              onBlur={inputBlurHandler}
              onChange={handleInputChange}
              value={formData.Fname}
            />
            {!fnameIsValid && <p>First Name cannot be empty</p>}
          </div>
          <div>
            <label htmlFor="Lname">Last Name</label>
            <input
              type="text"
              name="Lname"
              autoComplete="off"
              onChange={handleInputChange}
              onBlur={inputBlurHandler}
              value={formData.Lname}
            />
            {!lnameIsValid && <p>Last Name cannot be empty</p>}
          </div>
        </div>
        <div>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
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
        <div>
          <label htmlFor="phoneNum">Phone number</label>
          <input
            type="text"
            name="phoneNum"
            onChange={handleInputChange}
            value={formData.phoneNum}
          />
        </div>
        <div>
          <label htmlFor="Pettype">Select options:</label>
          <MultiSelect
            id="Pettype"
            defaultValue={formData.selectedOptions}
            onChange={handleSelectChange}
            options={petList}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
      <p>Form data: {JSON.stringify(formData)}</p>
    </div>
  );
}
