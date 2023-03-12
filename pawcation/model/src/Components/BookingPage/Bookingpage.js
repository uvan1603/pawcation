import React, { useState } from "react";
import DateRangePicker from "../Calender";
// import Dashboard from "../Dashboard/Dashboard";
import axios from "axios";
import "./BookingPage.css";

function BookingPage() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  // const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",
    specialNeeds: "",
    vaccinated: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post("http://localhost:3005/petDetails", formData);
  };

  const isVaccinated = formData.vaccinated;
  const disabled = !isVaccinated;

  return (
    <div>
      <h2>Book a pet boarding appointment</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <label className="form-label">
          Pet Name:
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          Pet Breed:
          <input
            type="text"
            value={formData.breed}
            onChange={(e) =>
              setFormData({ ...formData, breed: e.target.value })
            }
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          Pet Age:
          <input
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            className="form-input"
            required
          />
        </label>
        {formData.age < 0 && (
          <p className="error-message">Pet age cannot be negative.</p>
        )}
        <div className="checkbox-container">
          <label className="form-label">
            Vaccinated:
            <input
              type="checkbox"
              checked={formData.vaccinated}
              onChange={(e) =>
                setFormData({ ...formData, vaccinated: e.target.checked })
              }
              // className="form-input"
              required
            />
          </label>
        </div>
        {disabled && (
          <div className="form-error">We don't accept unvaccinated pets</div>
        )}
        <label className="form-label">
          Special Needs:
          <textarea
            value={formData.specialNeeds}
            onChange={(e) =>
              setFormData({ ...formData, specialNeeds: e.target.value })
            }
            className="form-input form-textarea"
          />
        </label>
        <div className="form-date-picker">
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            onDatesChange={({ startDate, endDate }) => {
              setStartDate(startDate);
              setEndDate(endDate);
            }}
            focusedInput={focusedInput}
            onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
            startDateId="start_date_id"
            endDateId="end_date_id"
            minimumNights={0}
            // color="#0073b1"
            // style={{ backgroundColor: "#fff", color: "#333", zIndex: "999" }}
          />
        </div>
        <button
          type="submit"
          className="form-submit-button"
          disabled={disabled}
        >
          Book Appointment
        </button>
      </form>
      {/* <Dashboard
        petName={formData.name}
        petBreed={formData.breed}
        petAge={formData.age}
        specialNeeds={formData.specialNeeds}
        // dateRange={formData.dateRange}
      /> */}
    </div>
  );
}

export default BookingPage;
