import React, { useState } from 'react';

export default function DropdownMenu() {
  const [selectedItem, setSelectedItem] = useState('All');

  function handleDropdownChange(event) {
    setSelectedItem(event.target.value);
    //console.log(`Selected item: ${event.target.value}`);
  }

  /*
  
  For testing purposes! And learning about useState
  
  function ParentComponent() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <ComponentA count={count} setCount={setCount} />
        <ComponentB count={count} />
      </div>
    );
  }
  
  function ComponentB(props) {
    return <div>Count: {props.count}</div>;
  }
  
  
  */

  return (
    <div>
      <select value={selectedItem} onChange={handleDropdownChange}>
        <option value="All">All</option>
        <option value="Adventure">Adventure</option>
        <option value="Comedy">Comedy</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Horror">Horror</option>
        <option value="Drama">Drama</option>
        <option value="Family">Family</option>
        <option value="Documentary">Documentary</option>
        <option value="Biography">Biography</option>
        <option value="Music">Music</option>
      </select>
    </div>
  );
}
