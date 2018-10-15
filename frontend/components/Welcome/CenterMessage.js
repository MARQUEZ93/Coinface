import React from 'react';

const CenterMessage = () => {
  return (
    <div className="Welcome-CenterMessage">
      <p className="Welcome-Center-Header"> Buy and sell digital currency </p>
      <div className="Welcome-Center-pTag-Div">
        <p className="Welcome-Center-pTag"> Coinface is the easiest and most trusted place to buy, </p>
        <p className="Welcome-Center-pTag"> sell, and manage your digital currency. </p>
      </div>
      <div className="centerForm">
      <input type="text" className="centerInput" placeholder="Email address" />
        <button className="centerButton" type="button">Get Started</button>
      </div>
  </div>
  );
}

export default CenterMessage;
