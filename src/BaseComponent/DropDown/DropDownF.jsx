import React, { useEffect, useState } from 'react';

function DropDownF({ options, title, onResult}) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  useEffect ( () => {
    onResult(selectedValue)
  },[selectedValue, onResult])

  return (
    <div className=' w-20'>
      <select
        id="dropdown"
        name="dropdown"
        className=" border border-gray-300 w-full bg-opacity-50 rounded-md shadow-sm outline-none text-sm text-black p-3"
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="">{title}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default DropDownF;
