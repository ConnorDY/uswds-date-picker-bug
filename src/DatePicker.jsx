import React from 'react';

function DatePicker() {
  return (
    <form className="usa-form">
      <div class="usa-form-group">
        <label
          class="usa-label"
          id="appointment-date-label"
          for="appointment-date"
        >
          Appointment date
        </label>

        <div class="usa-hint" id="appointment-date-hint">
          mm/dd/yyyy
        </div>

        <div class="usa-date-picker">
          <input
            class="usa-input"
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
