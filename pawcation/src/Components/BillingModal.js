import React from "react";
import "./BillingModal.css";
import { useContext } from "react";
import { ModalDisplay } from "../ModalDisplay";

const BillingModal = ({ numberOfDays, price }) => {
  const { showModal , setShowModal } = useContext(ModalDisplay);

  return (
    showModal && (
      <div class="modal-overlay">
        <div class="modal-container">
          <div class="modal-header">
            <div class="modal-title">Booking Details</div>
            <button type="button" class="modal-close" onClick={() => setShowModal(false)}>
              &times;
            </button>
          </div>
          <div class="modal-content">
            <div>Number of days: {numberOfDays}</div>
            <div>Price: Rs {numberOfDays * price} only</div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="modal-button">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default BillingModal;
