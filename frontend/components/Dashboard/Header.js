import React from 'react';
import SignOut from './SignOut';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.historyPush = this.historyPush.bind(this);
  }

  historyPush(e) {
    e.preventDefault();
    if (this.props.location.pathname !== "/dashboard") {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="dashboardHeader">
        <div className="dashboardLogo">
          <p className="HeaderLink" onClick={this.historyPush}> coinface </p>
        </div>
        <SignOut email={this.props.email} action={this.props.action} />
      </div>
    );
  }
}

export default Header;
