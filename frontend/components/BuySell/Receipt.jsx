import React from 'react';

const accountsImg = <svg className="svgNav" width="16" height="16" fill="#1652f0" viewBox="0 0 16 16">
  <path d="M12.337 0H1.5C.7 0 0 .7 0 1.5S.7 3 1.5
  3h10.837V0zM15 5H0v9c0 1.1.9 2 2 2h13c.6 0 1-.4
  1-1V6c0-.6-.4-1-1-1zm-2.5 7c-.8
  0-1.5-.7-1.5-1.5S11.7 9 12.5 9s1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"> </path>
</svg>


const houseSVG = <div className="houseSVGDiv"><svg className="houseSVG" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
  viewBox="0 0 18 18">
  <path d="M17.25 7.538c.45 0 .75-.3.75-.75v-1.5c0-.3-.15-.526-.375-.675l-8.25-4.5a.681.681 0 0 0-.75 0l-8.25 4.5A.788.788 0 0 0 0 5.287v1.5c0 .45.3.75.75.75h1.5v8.25H.75c-.45 0-.75.3-.75.75s.3.75.75.75h16.5c.45 0 .75-.3.75-.75s-.3-.75-.75-.75h-1.5v-8.25h1.5zm-9.75 8.25H5.25v-8.25H7.5v8.25zM9 6.038c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5 1.5.675 1.5 1.5-.675 1.5-1.5 1.5zm3.75 9.75H10.5v-8.25h2.25v8.25z">
  </path></svg></div>;


class Receipt extends React.Component {
  render(){
    return (
    <div className="Receipt">
      <div className="receiptHeaderDiv">
        <div className="receiptHeader">
          YOU ARE {this.props.type}
        </div>
        <div className="receiptAmount">
          {this.props.asset}{this.props.symbol}
        </div>
        <div className="receiptPrice">
          @ {this.props.price} per {this.props.symbol}
        </div>
      </div>
    </div>
  );

  }
}

export default Receipt;
