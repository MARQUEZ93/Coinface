import React from 'react';
import { withRouter } from 'react-router';

class Footer extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    if (this.props.location.pathname !== "/dashboard" ||
    this.props.location.pathname !== "/") {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
        <div className="WelcomeFooter">
          <p className="FooterLogo" onClick={this.handleClick}> coinface </p>
          <div className="footerImages">
            <a className="footerImage" href="https://github.com/MARQUEZ93/Coinface">
                <div className="gitImg" id="gitCoin"></div>
            </a>
            <a className="footerImage" href="https://www.linkedin.com/in/dromarquez/">
                <div className="gitImg" id="linkedCoin"></div>
            </a>
            <a className="footerImage" href="https://angel.co/alejandro-eduardo-marquez">
                <div className="gitImg" id="angelCoin"></div>
            </a>
          </div>
          <p className="copyright"> &copy; 2019 Coinface </p>
        </div>
    );
  }
}

export default withRouter(Footer);
