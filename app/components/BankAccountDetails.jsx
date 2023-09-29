import React from 'react';
import './BankAccountDetails.css';

const BankAccountDetails = ({ accountHolder, accountNumber, ifscCode }) => {
  return (
    <div className="bank-account-details">
      <h2>Bank Account Details</h2>
      <div className="account-info">
        <p>
          <strong>Account Holder:</strong> {accountHolder}
        </p>
        <p>
          <strong>Account Number:</strong> {accountNumber}
        </p>
        <p>
          <strong>IFSC Code:</strong> {ifscCode}
        </p>
        <p>
          <strong>Branch:  </strong> Chandigarh
        </p>
        <p>
          <strong>UPI ID:</strong>  9411821385@jio
        </p>
      </div>
    </div>
  );
};

export default BankAccountDetails;
