import React from "react";
import './Form.css'
function PersonalDetails({ nextStep, handleChange, formData }) {
  const { name, email, phone } = formData;

  const handleNext = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("Please fill all fields.");
      return;
    }
    nextStep();
  };

  return (
    <div className="form-container">
      <h2>Personal Details</h2>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleChange("name")}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChange("email")}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={handleChange("phone")}
        />
        <button onClick={handleNext}>Next</button>
      </form>
    </div>
  );
}

export default PersonalDetails;
