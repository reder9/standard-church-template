// OnlineGivingPage.tsx

import React from "react";
import "./OnlineGiving.css";

const OnlineGivingPage: React.FC = () => {
  return (
    <div className="online-giving-container">
      <h1>Online Giving</h1>
      <p>
        Your generosity helps us continue our mission. Thank you for giving!
      </p>

      {/* Embed the Stripe checkout page using an iframe */}
      <div className="iframe-container">
        <iframe
          src="https://buy.stripe.com/test_00g9DMf9C27E3uw3cc"
          width="100%"
          height="700"
          frameBorder="0"
          title="Stripe Checkout"
        ></iframe>
      </div>
    </div>
  );
};

export default OnlineGivingPage;
