import React from "react";
import './Form.css'

function PaymentDetails({ nextStep, prevStep, handleChange, formData }) {
  const { cardNumber, cardName, expiry, cvv } = formData;

  const handleNext = (e) => {
    e.preventDefault();
    if (!cardNumber || !cardName || !expiry || !cvv) {
      alert("Please fill all fields.");
      return;
    }
    nextStep();
  };

  return (
    <div className="form-container">
      <h2>Payment Details</h2>
      <form>
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={handleChange("cardNumber")}
        />
        <input
          type="text"
          placeholder="Name on Card"
          value={cardName}
          onChange={handleChange("cardName")}
        />
        <input
          type="text"
          placeholder="Expiry Date"
          value={expiry}
          onChange={handleChange("expiry")}
        />
        <input
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={handleChange("cvv")}
        />
        <button onClick={prevStep}>Back</button>
        <button onClick={handleNext}>Next</button>
      </form>
    </div>
  );
}

export default PaymentDetails;
