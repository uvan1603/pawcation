import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard({ petName, petBreed, petAge, specialNeeds, petType }) {
  const [petDetails, setPetDetails] = useState({});
  const [petUpdates, setPetUpdates] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/petDetails")
      .then((response) => {
        setPetDetails(response.data[response.data.length - 1]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3005/petUpdates")
      .then((response) => {
        const data = response.data;
        console.log(data);
        const updatesArray = data[0].updates.split(',')
        console.log(updatesArray);
        setPetUpdates(updatesArray.flat());
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        <h2>Appointment Details</h2>
        <p>
          <strong>Pet Name:{petDetails.name}</strong>
        </p>
        <p>
          <strong>Pet type:{petDetails.petType}</strong> {specialNeeds}
        </p>
        <p>
          <strong>Pet Breed:{petDetails.breed}</strong> {petBreed}
        </p>
        <p>
          <strong>Pet Age:{petDetails.age}</strong> {petAge}
        </p>
        <p>
          <strong>Special Needs:{petDetails.specialNeeds}</strong>{" "}
          {specialNeeds}
        </p>
      </div>
      <div>
        <h1>Pet Updates</h1>
        {petUpdates.map((update, index) => (
          <p key={index}>{update}</p>
        ))}
      </div>
    </>
  );
}

export default Dashboard;
