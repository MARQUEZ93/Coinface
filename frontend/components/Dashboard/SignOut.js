import React from 'react';
import { withRouter } from 'react-router-dom';

class SignOut extends React.Component {

  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut(e){
    e.preventDefault();
    this.props.action().then(response =>
      {
        console.log(response);
        //when multiple users use guest login on thecoinface.com
        //this allows user to logout despite changed session tokens
        if (response.json[0] == "Nobody signed in") {
          this.props.history.push('/');
        }
    });
  }

  render() {
    return (
      <form className="SignOutForm" onSubmit={this.signOut}>
        <p className="userEmail">{this.props.firstName}{" "}{this.props.middleName}{" "}{this.props.lastName}</p>
        <input type="submit" className="SignOutInput" value="Sign Out"></input>
      </form>
    );
  }
}

export default withRouter(SignOut);
