import React from 'react';

const GetStarted = () => {
  return (
      <div className="GetStarted">
        <h1> Get started in a few minutes </h1>
        <div className="GetStartedDivs">
          <div className="GSThreeDivs">
            <img src={window.icon_add} />
            <h3> Create an account </h3>
          </div>
          <div className="GSPillarLine"></div>
          <div className="GSThreeDivs">
            <img src={window.icon_bank}/>
            <h3> Link your bank account </h3>
          </div>
          <div className="GSPillarLine"></div>
          <div className="GSThreeDivs">
            <img src={window.icon_handout} />
            <h3> Start buying and selling </h3>
          </div>
        </div>
      </div>
  );
}

export default GetStarted;
