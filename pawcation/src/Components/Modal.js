import { useContext } from "react";
import { ModalDisplay } from "../ModalDisplay";
export const BillingModal = (props) => {
  const { showModal} = useContext(ModalDisplay);
  let numberOfDays = props.numberOfDays;
  return (
    showModal && (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "grey",
            opacity: "50%",
            width: "100%",
            height: "100%",
          }}
        />
        <div style={{ width: "100px", height: "100px", background: "red" }}>
          <div>Number of days: {numberOfDays}</div>
          <div>Price: ${numberOfDays * 10}</div>
          <button type="submit" className="form-submit-button">
            Book Appointment
          </button>
        </div>
      </div>
    )
  );
};
