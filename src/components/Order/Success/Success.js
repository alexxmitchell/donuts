import React from "react";

const styling = {
  border: "4px double #735b69",
  background: "white"
};
const Success = () => {
  return (
    <div className="success-page">
      <h2>Thank you for your order!</h2>
      <p>Your box will be available shortly.</p>
    </div>
  );
};

export default Success;
