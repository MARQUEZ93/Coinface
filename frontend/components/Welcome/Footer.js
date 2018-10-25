import React from 'react';

class Footer extends React.Component {

  render() {
    return (
        <div className="WelcomeFooter">
          <p className="FooterLogo"> coinface </p>
          <div className="WelcomeFooterInfo">
            <a className="FooterATag" href="https://github.com/MARQUEZ93/Coinface">
              https://github.com/MARQUEZ93/Coinface </a>
            <a className="FooterATag" href="mailto:alejandroeduardomarquez@gmail.com"> alejandroeduardomarquez@gmail.com </a>
          </div>
          <p className="copyright"> &copy; 2018 Coinface </p>
        </div>
    );
  }
}

export default Footer;
