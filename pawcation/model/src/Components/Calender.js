import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRangePicker = () => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };

  const numberOfDays =
    (selectionRange.endDate - selectionRange.startDate) / (1000 * 60 * 60 * 24);

  return (
    <div>
      <DateRange
        ranges={[selectionRange]}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        months={1}
        direction="horizontal"
      />
      <div>Number of days: {numberOfDays}</div>
      <div>Price: ${numberOfDays * 10}</div>
    </div>
  );
};

export default DateRangePicker;
