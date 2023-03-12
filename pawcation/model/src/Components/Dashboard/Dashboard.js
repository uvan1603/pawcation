import React, { useEffect, useState } from "react";
import axios from "axios";


function Dashboard({ petName, petBreed, petAge, specialNeeds }) {
    const [petDetails, setPetDetails] = useState({});

    useEffect(() => {
        axios.get("http://localhost:3005/petDetails")
          .then(response => {
            setPetDetails(response.data[1]);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

      console.log(petDetails);
  return (
    <div>
      <h2>Appointment Details</h2>
      <p>
        <strong>Pet Name:{petDetails.name}</strong> {petName}
      </p>
      <p>
        <strong>Pet Breed:{petDetails.breed}</strong> {petBreed}
      </p>
      <p>
        <strong>Pet Age:{petDetails.age}</strong> {petAge}
      </p>
      <p>
        <strong>Special Needs:{petDetails.specialNeeds}</strong> {specialNeeds}
      </p>
      {/* <p>
        <strong>Date Range:</strong> {dateRange[0].startDate.toDateString()} to{" "}
        {dateRange[0].endDate.toDateString()}
      </p> */}
    </div>
  );
}

export default Dashboard;
