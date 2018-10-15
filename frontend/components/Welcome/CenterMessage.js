import React from 'react';

const CenterMessage = () => {
  return (
    <div className="Welcome-CenterMessage">
      <p className="Welcome-Buy-pTag-Center"> Buy and sell digital currency </p>
      <p className="Welcome-pTag"> Coinface is the easiest and most trusted place to buy, sell, and manage your digital currency. </p>
      <div className="centerForm">
      <input type="text" className="centerInput" placeholder="Email address" />
        <button className="centerButton" type="button">Get Started</button>
      </div>
  </div>
  );
}

export default CenterMessage;
