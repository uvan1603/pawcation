import React from "react";
import './PetServiceModal.css'

const PetServiceModal = ({service, onClose}) => {
    console.log(service);
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Service Description</h2>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PetServiceModal;
