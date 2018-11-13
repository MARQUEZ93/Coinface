import React from 'react';

class Footer extends React.Component {

  render() {
    return (
        <div className="WelcomeFooter">
          <p className="FooterLogo"> coinface </p>
          <div className="footerImages">
            <a className="footerImage" href="https://github.com/MARQUEZ93/Coinface">
                <div className="gitImg" id="gitCoin"></div>
            </a>
            <a className="footerImage" href="https://linkedin.com/droMarquez">
                <div className="gitImg" id="linkedCoin"></div>
            </a>
            <a className="footerImage" href="https://angel.co/alejandro-eduardo-marquez">
                <div className="gitImg" id="angelCoin"></div>
            </a>
          </div>
          <div className="footerTexts">
            <a className="copyright" href="mailto:alejandroeduardomarquez@gmail.com"><p> alejandroeduardomarquez@gmail.com</p> </a>
            <a className="copyright" href="droMarquez.com"><p>droMarquez.com</p></a>
            <p className="copyright"> &copy; 2018 Coinface </p>
          </div>
        </div>
    );
  }
}

export default Footer;
