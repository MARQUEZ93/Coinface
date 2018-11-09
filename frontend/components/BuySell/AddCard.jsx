import React, { Component } from 'react';

const xSVG = <svg className="xSymbol" xmlns="http://www.w3.org/2000/svg"
  width="20" height="20" viewBox="0 0 20 20">
  <path d="M18.096 19.174l1.401-1.427L1.7.286.3 1.714z"></path>
  <path d="M19.497 1.714L18.096.286.3 17.747l1.4 1.427z">
  </path></svg>;

const masterCardSVG = <svg className="masterCardSVG"
  xmlns="http://www.w3.org/2000/svg" width="32" height="32"
  viewBox="0 0 32 32"><g fill="none" transform="translate(0 7)">
  <ellipse cx="9.119" cy="9.412" fill="#EB001B" rx="9.119"
    ry="9.412"></ellipse><ellipse cx="22.799" cy="9.412"
    fill="#F79E1B" rx="9.119" ry="9.412"></ellipse>
<path fill="#FF5F00" d="M15.96 15.637a9.55 9.55 0 0 0 2.279-6.225 9.55 9.55 0 0 0-2.28-6.226 9.55 9.55 0 0 0-2.28 6.226 9.55 9.55 0 0 0 2.28 6.225z">
</path></g></svg>;

const visaSVG = <svg className="visaSVG" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none"><path fill="#2B3894"
  d="M11.285 20.629l1.61-9.967h2.573l-1.61 9.967h-2.573M23.194 10.906a6.374 6.374 0 0 0-2.306-.419c-2.545 0-4.336 1.353-4.35 3.29-.017 1.433 1.277 2.232 2.253 2.708 1.003.488 1.34.8 1.336 1.237-.007.667-.8.973-1.54.973-1.03 0-1.578-.15-2.425-.522l-.33-.16-.36 2.232c.6.278 1.712.519 2.867.531 2.704 0 4.46-1.336 4.481-3.404.01-1.136-.676-1.998-2.161-2.709-.9-.462-1.452-.768-1.445-1.236 0-.414.466-.857 1.474-.857a4.522 4.522 0 0 1 1.926.382l.231.115.349-2.161M26.62 17.095c.214-.573 1.026-2.786 1.026-2.786-.015.026.212-.578.342-.951l.174.86s.494 2.378.595 2.877h-2.136zm3.176-6.424h-1.99c-.616 0-1.078.177-1.348.826l-3.822 9.135h2.703s.441-1.229.541-1.499l3.297.006c.077.347.313 1.493.313 1.493h2.389l-2.083-9.96zM9.126 10.67l-2.52 6.795-.27-1.381c-.469-1.592-1.93-3.317-3.564-4.181l2.304 8.717L7.8 20.62l4.053-9.95H9.126">
</path><path fill="#F79510" d="M4.268 10.662H.118l-.034.207c3.23.826 5.366 2.819 6.253 5.214l-.902-4.58c-.156-.631-.608-.818-1.167-.84"></path></g></svg>;

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = { numbers: "", year: "", postal: "", cvc: "", clickedName: false, month: "" };
    this.handleNumbers = this.handleNumbers.bind(this);
    this.toggleName = this.toggleName.bind(this);
    this.updateYear = this.updateYear.bind(this);
    this.updateMonth = this.updateMonth.bind(this);
  }
  handleNumbers(e) {
    let hasNaN = false;
    for (let i = 0; i < e.currentTarget.value.length; i++){
      //NaN equality
      if (isNaN(parseInt(e.currentTarget.value[i]))) {
        hasNaN = true; break;
      }
    }
    if (!hasNaN) {
      this.setState({ numbers: e.currentTarget.value });
    }
  }
  //zip cvc

  update(field) {
      return e => {
        let hasNaN = false;
        for (let i = 0; i < e.currentTarget.value.length; i++){
          //NaN equality
          if (isNaN(parseInt(e.currentTarget.value[i]))) {
            hasNaN = true; break;
          }
        }
        let isValid = true;
        //cvc
        if (field === "cvc" && !hasNaN) {
          if (e.currentTarget.value.length > 3) {
            isValid=false;
          }
        }
        if (field === "postal" && !hasNaN) {
          if (e.currentTarget.value.length > 5) {
            isValid=false;
          }
        }
        if (!hasNaN && isValid) {
          this.setState({
            [field]: e.currentTarget.value
          });
        }
    }
  }
  toggleName(){
    this.setState ({ clickedName: !this.state.clickedName });
  }
  updateMonth(e) {
    //nan; 1-12; not greater than 2 length
    let hasNaN = false;
    for (let i = 0; i < e.currentTarget.value.length; i++){
      //NaN equality
      if (isNaN(parseInt(e.currentTarget.value[i]))) {
        hasNaN = true; break;
      }
    }
    let monthInBounds = true;
    if (!hasNaN && e.currentTarget.value.length == 2){
      if ((parseInt(e.currentTarget.value[1]) > 2 && parseInt(e.currentTarget.value[0]) != 0) || parseInt(e.currentTarget.value[0]) > 1 ){
        monthInBounds = false;
      }
    }
    if (!hasNaN && monthInBounds && e.currentTarget.value.length < 3) {
      this.setState({ month: e.currentTarget.value });
    }
  }
  updateYear(e) {
    //nan; > 18; not greater than 2 length
      let hasNaN = false;
      for (let i = 0; i < e.currentTarget.value.length; i++){
        //NaN equality
        if (isNaN(parseInt(e.currentTarget.value[i]))) {
          hasNaN = true; break;
        }
      }
      let yearInBounds = true;
      if (!hasNaN && e.currentTarget.value.length == 2){
        if (parseInt(e.currentTarget.value) < 19){
          monthInBounds = false;
        }
      }
      if (!hasNaN && yearInBounds && e.currentTarget.value.length < 3) {
        this.setState({ year: e.currentTarget.value });
      }
  }
  processCard(){

  }
  render(){
    let name = this.props.name;
    let id = this.props.id;
    let placeholderNumbers = "XXXX XXXX XXXX XXXX";
    let nameClicked = <p className="nameClickedP">Card name must match account name.</p>;
    return (
      <div className="addCard">
        <div className="addCardInner">

          <div className="firstLinePopup">
            <div className="symbolPopUp">
              <p>Link Your Card</p>
            </div>
            <button className="closePopupButton" onClick={() => this.props.closePopup()}>{xSVG}</button>
          </div>
          <div className="inputReceipientDiv">
            Name on card <div onClick={this.toggleName} className="inputReceipient">{name}</div>
          {this.state.clickedName ? nameClicked:null}
          </div>
          <div className="cardNumberDiv">
            Card number
            <div className="inputDivCardNumber">
              <input value={this.state.numbers} onChange={this.handleNumbers}placeholder={placeholderNumbers} className="cardInput"></input>
              <div className="cardSVGS">{visaSVG}{masterCardSVG}</div>
            </div>
          </div>
          <div className="threeCardDetails">
              <div className="expDiv">
                Expiration
                <div className="expInputsDiv">
                  <input value={this.state.month} onChange={this.updateMonth} className="expMonthInput" placeholder={"MM"}></input>
                  <input value={this.state.year}onChange={this.updateYear} className="expYearInput" placeholder={"YY"}></input>
              </div>
            </div>
            <div className="cvcDiv">
              CVC
              <input value={this.state['cvc']} onChange={this.update('cvc')} className="cvcInput" placeholder={"123"}></input>
            </div>
            <div className="postalDiv">
              Postal code
              <input value={this.state['postal']} onChange={this.update('postal')}className="postalInput" placeholder={"ZIP"}></input>
            </div>
          </div>
          <div className="cardButtonDiv">
            <button onClick={this.processCard} className="addCardButton">Add Card</button>
          </div>
        </div>
      </div>
    )
  }
}
export default AddCard;
