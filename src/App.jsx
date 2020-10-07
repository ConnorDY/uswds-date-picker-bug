import React, { useState } from 'react';

import { DatePicker } from './DatePicker';

function App() {
  const [showDatePicker, setShowDatePicker] = useState(true);

  function toggleDatePicker() {
    setShowDatePicker(!showDatePicker);
  }

  return (
    <>
      <button onClick={() => toggleDatePicker()}>Toggle Date Picker</button>
      <br />
      <br />
      {showDatePicker && <DatePicker />}
    </>
  );
}

export default App;
