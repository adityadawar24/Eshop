import React, { useState } from 'react';
import "./Payment.css";

const PaymentForm = () => {
  const [paymentData, setPaymentData] = useState(null);
  const totalCost = localStorage.getItem("totalCost") || 0;
const totalAmount = Math.max(totalCost * 100, 100);

  const initializeRazorpay = () => {
    const options = {
      key: 'rzp_test_JBWq6pii9P7QlV',
      amount: totalAmount,               //Card Number: 4111 1111 1111 1111
      currency: 'INR',
      name: 'My Store',
      description: 'Test Payment',
      handler: (response) => {
        setPaymentData(response);
      },
      prefill: {
        name: "John Doe",
      email: "john@example.com",
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#007BFF",
    },
      testMode: true, 
    };

    const razorpayScript = document.createElement('script');
    razorpayScript.src = 'https://checkout.razorpay.com/v1/checkout.js';
    razorpayScript.async = true;
    razorpayScript.onload = () => {
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    };

    document.body.appendChild(razorpayScript);
  };
  


  return (
    <div>
      <div className="payment-page">
      <div className="payment-form">
      <button onClick={initializeRazorpay}>Pay </button>
      <img src="data:image/png;base64,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" alt="Razorpay Logo" className="razorpay-logo" />
    </div>
    </div>
    {paymentData && (
        <div className='receipt'>
          <h3>Payment Successful!</h3>
          <p>Payment ID: {paymentData.razorpay_payment_id}</p>
          <p>Order by: Jhone Doe</p>
          <p>Toatal amount: ${totalAmount/100.00} </p>
        </div>
      )}
    </div>
    
  );
};

export default PaymentForm;
