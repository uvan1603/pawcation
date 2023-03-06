import React, { useState } from "react";
import DateRangePicker from "./Calender";
import axios from "axios";


function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",
    specialNeeds: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post("http://localhost:3005/petDetails", formData);
  };

  return (
    <div>
      <h2>Book a pet boarding appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Pet Name:
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </label>
        <label>
          Pet Breed:
          <input
            type="text"
            value={formData.breed}
            onChange={(e) =>
              setFormData({ ...formData, breed: e.target.value })
            }
            required
          />
        </label>
        <label>
          Pet Age:
          <input
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            required
          />
        </label>
        <label>
          Special Needs:
          <textarea
            value={formData.specialNeeds}
            onChange={(e) =>
              setFormData({ ...formData, specialNeeds: e.target.value })
            }
          />
        </label>
        <DateRangePicker />
        <button type="submit">Book Appointment</button>
      </form>
      
    </div>
  );
}

export default BookingPage;
