import React from 'react';
import { withRouter } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  renderSvg(pathArg) {
    return (
      <svg className="svgNav" width="16" height="16" fill="#1652f0" viewBox="0 0 16 16">
        <path d={pathArg}> </path>
      </svg>
    );
  }
  render() {
    const dashImg = "M6 9H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1zm0 7H1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1zm9-10h-5a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zm0 10h-5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z";
    const buyImg = "M2 5h10.6l-1.3 1.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l3-3c.4-.4.4-1 0-1.4l-3-3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L12.6 3H1c-.6 0-1 .4-1 1v3h2V5zm12 6H3.4l1.3-1.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-3 3c-.4.4-.4 1 0 1.4l3 3c.2.2.4.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4L3.4 13H15c.6 0 1-.4 1-1V9h-2v2z";
    const accountsImg = "M12.337 0H1.5C.7 0 0 .7 0 1.5S.7 3 1.5 3h10.837V0zM15 5H0v9c0 1.1.9 2 2 2h13c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1zm-2.5 7c-.8 0-1.5-.7-1.5-1.5S11.7 9 12.5 9s1.5.7 1.5 1.5-.7 1.5-1.5 1.5z";
    return (
      <div className="navBar">
        <ul className="unorderedListNavBar">
          <li className="listItemNavBar">
            {this.renderSvg(dashImg)}
            Dashboard
          </li>
          <li className="listItemNavBar">
            {this.renderSvg(buyImg)}
            Buy/Sell
          </li>
          <li className="listItemNavBar">
            {this.renderSvg(accountsImg)}
            Accounts
          </li>
        </ul>
      </div>
    );
  }
}
export default withRouter(NavBar);
