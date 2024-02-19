import React, { useState } from 'react';
import './DropDown.css';

function DropDown({ options, title }) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className='drop-down-container'>
      <select
        id="dropdown"
        name="dropdown"
        className="custom-select"
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

export default DropDown;


{/* <div className='drop-down-container'>
                  <select
                    id="dropdown"
                    name="dropdown"
                    className="custom-select"
                    value={selectOP}
                    onChange={handleChange}
                  >
                    <option value="">A/D</option>
                    {AD.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div> */}