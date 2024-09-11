import React from "react";
import './Form.css'

function Review({ formData, prevStep }) {
  const handleSubmit = () => {
    alert("Form submitted successfully!");
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Review Your Details</h2>
      <ul>
        <li><strong>Name:</strong> {formData.name}</li>
        <li><strong>Email:</strong> {formData.email}</li>
        <li><strong>Phone:</strong> {formData.phone}</li>
        <li><strong>Address:</strong> {formData.address}, {formData.city}, {formData.country}</li>
        <li><strong>Card Number:</strong> {formData.cardNumber}</li>
        <li><strong>Name on Card:</strong> {formData.cardName}</li>
        <li><strong>Expiry:</strong> {formData.expiry}</li>
        <li><strong>CVV:</strong> {formData.cvv}</li>
      </ul>
      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Review;
