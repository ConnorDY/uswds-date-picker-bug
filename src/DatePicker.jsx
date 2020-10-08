import React, { useEffect, useRef } from 'react';
import datePicker from 'uswds/src/js/components/date-picker';

function DatePicker() {
  const datePickerRef = useRef();

  useEffect(() => {
    const datePickerEl = datePickerRef.current;
    if (datePickerEl) datePicker.on(datePickerEl);
  }, [datePickerRef]);

  return (
    <form className="usa-form">
      <div className="usa-form-group">
        <label
          className="usa-label"
          id="appointment-date-label"
          htmlFor="appointment-date"
        >
          Appointment date
        </label>

        <div className="usa-hint" id="appointment-date-hint">
          mm/dd/yyyy
        </div>

        <div className="usa-date-picker" ref={datePickerRef}>
          <input
            className="usa-input"
            id="appointment-date"
            name="appointment-date"
            type="text"
            aria-describedby="appointment-date-label appointment-date-hint"
          />
        </div>
      </div>
    </form>
  );
}

export { DatePicker };
