import React, { useState } from 'react';
import { useStates } from '../utilities/states';

export default function DropdownMenu() {
  const [selectedItem, setSelectedItem] = useState('option1');

  function handleDropdownChange(event) {
    setSelectedItem(event.target.value);
    console.log(`Selected item: ${event.target.value}`);
  }

  return (
    <div>
      <select value={selectedItem} onChange={handleDropdownChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
}
