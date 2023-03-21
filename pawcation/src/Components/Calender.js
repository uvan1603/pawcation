import React, { useState } from "react";
import { DateRange } from "react-date-range";
// import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { BillingModal } from "./Modal";

const BoardingCalender = (props) => {
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [error, setError] = useState(null);
  const [price, setPrice] = useState(0);

  const handleSelect = (ranges) => {
    const { startDate, endDate } = ranges.selection;
    const numDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    const petType = "dog"; // or 'cat' depending on the selected pet type
    // calculate price based on number of days selected and pet type
    if (numDays <= 0) {
      // show error message
      setError("Invalid date range selected");
      setPrice(0);
    } else {
      // calculate price and update state variables
      const newPrice = petType === "dog" ? numDays * 20 : numDays * 15;
      setDates([ranges.selection]);
      setError(null);
      setPrice(newPrice);
    }
  };

  return (
    <div>
      <DateRange
        editableDateInputs={true}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        ranges={dates}
        minDate={new Date()}
        className="date-range"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <p>Number of days selected: {dates[0].numDays}</p>
        <p>Price: ${price}</p>
      </div>
      <BillingModal numberOfDays={dates.numDays} />
    </div>
  );
};

export default BoardingCalender;
