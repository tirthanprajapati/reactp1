
import React from 'react';

const LocationDropdown = () => {
  return (
    <div className="location-dropdown card">
      <div className="card-body">
        <h5 className="card-title">Location</h5>
        {/* Add your dropdown component here */}
        <select className="form-select">
          <option value="1">Location 1</option>
          <option value="2">Location 2</option>
          <option value="3">Location 3</option>
          {/* Add more options as needed */}
        </select>
      </div>
    </div>
  );
};

export default LocationDropdown;
