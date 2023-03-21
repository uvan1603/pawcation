import React, { useContext, useState } from "react";
// import BoardingCalender from "../Calender";
import axios from "axios";
// import { DateRange } from "react-date-range";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
import "./BookingPage.css";
import { useNavigate } from "react-router-dom";
import { ModalDisplay } from "../../ModalDisplay";
import BillingModal from "../BillingModal";

function BookingPage() {
  // const [focusedInput, setFocusedInput] = useState(null);
  const { setShowModal } = useContext(ModalDisplay);
  // const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",
    petType: "Dog",
    vaccinated: false,
    specialNeeds: "",
    startDate: null,
    endDate: null,
  });
  // const [dates, setDates] = useState([]);

  const handleSubmit = (e) => {
    setShowModal(false);
    e.preventDefault();
    console.log(formData);
    axios.post("http://localhost:3004/petDetails", formData);
    navigate("/dashboard");
  };

  const calculateDays = () => {
    const date2 = new Date(formData.endDate);
    const date1 = new Date(formData.startDate);
    const diffInMs = Math.abs(date2 - date1);
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
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
        <label className="form-label">
          Pet Type:
          <select
            className="select-pet-type"
            value={formData.petType}
            onChange={(e) =>
              setFormData({ ...formData, petType: e.target.value })
            }
          >
            <option value={"Dog"}>Dog</option>
            <option value={"Cat"}>Cat</option>
          </select>
        </label>
        <div className="checkbox-container">
          <label className="form-label">
            Vaccinated:
            <input
              type="checkbox"
              checked={formData.vaccinated}
              onChange={(e) =>
                setFormData({ ...formData, vaccinated: e.target.checked })
              }
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
        <div>
          <label className="form-label">Select Boarding Dates:</label>
          <label>In date</label>
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) =>
              setFormData({ ...formData, startDate: e.target.value })
            }
          />
          <label>Out date</label>
          <input
            type="date"
            value={formData.endDate}
            onChange={(e) =>
              setFormData({ ...formData, endDate: e.target.value })
            }
          />
        </div>
        <BillingModal
          numberOfDays={calculateDays()}
          price={formData.petType === "Cat" ? 15 : 20}
        />
        <button
          disabled={!formData.vaccinated}
          className="form-submit-button"
          onClick={(e) => {
            e.preventDefault();
            setShowModal(true);
          }}
        >
          Proceed
        </button>
      </form>
    </div>
  );
}

export default BookingPage;
