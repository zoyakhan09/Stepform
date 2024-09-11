import React from "react";
import './Form.css'

function AddressDetails({ nextStep, prevStep, handleChange, formData }) {
  const { address, city, country } = formData;

  const handleNext = (e) => {
    e.preventDefault();
    if (!address || !city || !country) {
      alert("Please fill all fields.");
      return;
    }
    nextStep();
  };

  return (
    <div className="form-container">
      <h2>Address Details</h2>
      <form>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={handleChange("address")}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={handleChange("city")}
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={handleChange("country")}
        />
        <button onClick={prevStep}>Back</button>
        <button onClick={handleNext}>Next</button>
      </form>
    </div>
  );
}

export default AddressDetails;
