import React, { Component } from 'react';
import { GridLoader } from 'halogenium';
import { connect } from 'react-redux';

class Transactions extends Component {

  constructor(props) {
    super(props);
    this.merge = this.merge.bind(this);
    this.mergesort = this.mergesort.bind(this);
    this.renderActivityList = this.renderActivityList.bind(this);
    this.renderActivity = this.renderActivity.bind(this);

    this.getDate = this.getDate.bind(this);
    this.getDescription = this.getDescription.bind(this);
    this.getMonth = this.getMonth.bind(this);
    this.getSvg = this.getSvg.bind(this);
    this.getColor = this.getColor.bind(this);
    this.getImage = this.getImage.bind(this);
    this.getDay = this.getDay.bind(this);

  }

  merge(leftArr, rightArr) {
    var sortedArr = [];
      while (leftArr.length && rightArr.length) {
        if (Date.parse(leftArr[0].created_at) >= Date.parse(rightArr[0].created_at)) {
          sortedArr.push(leftArr[0]);
          leftArr = leftArr.slice(1)
       } else {
          sortedArr.push(rightArr[0]);
          rightArr = rightArr.slice(1)
         }
       }
      while (leftArr.length)
        sortedArr.push(leftArr.shift());
      while (rightArr.length)
        sortedArr.push(rightArr.shift());
      return sortedArr;
}

mergesort(arr) {
  if (arr.length < 2) {
    return arr; }
  else {
    var midpoint = parseInt(arr.length / 2);
    var leftArr   = arr.slice(0, midpoint);
    var rightArr  = arr.slice(midpoint, arr.length);
    return this.merge(this.mergesort(leftArr), this.mergesort(rightArr));
  }
}

  getSvg(activity) {

    const BuySold = (color) => (
    <svg stroke={color} className="recentActivitySVG" xmlns="http://www.w3.org/2000/svg"
    width="32" height="32" viewBox="0 0 32 32"><g fill="none"
    fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"
    transform="translate(1 1)"><circle cx="15" cy="15" r="15"></circle>
    <path d="M23.684 17.368H7.895l5.526 5.527M6.316 12.632h15.789l-5.526-5.527">
    </path></g></svg>
    );

    const Receive = (color) => (
    <svg stroke={color} className="recentActivitySVG"
     xmlns="http://www.w3.org/2000/svg" width="30" height="30"
    viewBox="0 0 30 30"><g fill="none" fillRule="evenodd" transform="translate(1 1)">
    <path d="M14 5.895v11.79M18.421 13.263L14 17.684l-4.421-4.421M20.268 20.632H7.731"></path>
    <circle cx="14" cy="14" r="14"></circle></g></svg>
    );

    const Transfer = (color) => (
      <svg stroke={color} className="recentActivitySVG"
      xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
      <g fill="none" fillRule="evenodd" transform="translate(1 1)">
      <path d="M14 17.684V5.894M18.421 10.315L14 5.894l-4.421 4.421M20.268 20.632H7.731"></path>
      <circle cx="14" cy="14" r="14"></circle></g></svg>
    );

      if (activity.activity_type == "purchase" || activity.activity_type == "selling") {
        return BuySold;
      } else if (activity.activity_type == "receive") {
        return Receive;
      } else if (activity.activity_type == "transfer") {
        return Transfer;
      }
  }


  getImage(activity) {
    let color = this.getColor(activity);
    let svg = this.getSvg(activity);
    return svg(color);
  }

  getColor(activity) {

    const btcColor = "rgb(247, 147, 26)";
    const bchColor = "rgb(141, 195, 81)";
    const etcColor = "#0FDF8E";
    const ethColor = "rgb(98, 126, 234)";
    const ltcColor = "rgb(191, 187, 187)";

    if (activity.asset_type === "BTC") {
      return btcColor;
    } else if (activity.asset_type === "BCH") {
      return bchColor;
    } else if (activity.asset_type === "ETC") {
      return etcColor;
    } else if (activity.asset_type === "ETH") {
      return ethColor;
    } else if (activity.asset_type === "LTC") {
      return ltcColor;
    }
  }

  getDescription(activity) {
    let activityVerb = "";
    if (activity.activity_type == "purchase") {
      activityVerb+= "Bought "
    } else if (activity.activity_type == "receive") {
      activityVerb+="Received  "
    } else if (activity.activity_type == "transfer") {
      activityVerb+="Sent "
    } else if (activity.activity_type == "selling") {
      activityVerb+="Sold "
    }

    let asset = "";

    if (activity.asset_type == "BTC") {
      asset+="Bitcoin"
    } else if (activity.asset_type  == "BCH") {
      asset+="Bitcoin Cash"
    } else if (activity.asset_type  == "ETC") {
      asset+="Ethereum Classic"
    } else if (activity.asset_type  == "ETH") {
      asset+="Ethereum"
    } else if (activity.asset_type  == "LTC") {
      asset+="Litecoin"
    }

    let underDescription = "";
    console.log(activity);
    if (!!activity.note && activity.note === "A gift for joining Coinface!") {
      underDescription = activity.note;
    } else if (activity.activity_type == "purchase") {
      underDescription+= "Debited  " + activity.card_type + " ************" + activity.last_four_digits.toString();
    } else if (activity.activity_type == "receive") {
      underDescription+="From  " + asset + " address"
    } else if (activity.activity_type == "transfer") {
      underDescription+="To " + asset + " address"
    } else if (activity.activity_type == "selling") {
      underDescription+="Credited " + activity.card_type + " ************" + activity.last_four_digits.toString();
    }

    return (
      <div className="descriptionRecentActivity">
        <p className="topDescriptionRecentActivity">{activityVerb + asset}</p>
        <p className="underDescriptionRecentActivity">{underDescription}</p>
      </div>
    );


  }

  //add zero for 1-9 calendar days
  getDay(day) {
    return (day < 10 ? '0' : '') + day;
  }

  getMonth(monthInt) {
    const months = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
      "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];
    return months[parseInt(monthInt,10)];
  }

  getDate (timestamp) {
    let date = Date.parse(timestamp);
    date = new Date(date);
    let day = date.getDate();
    day = this.getDay(parseInt(day));
    let month = date.getMonth();
    month = this.getMonth(month);
    return (
        <div key={date} className="dateRecentActivity">
          <p className="dateRecentActivityMonth">{month}</p>
          <p className="dateRecentActivityDay">{day}</p>
        </div>
    );
  }

  getAmount(activity) {
    let assetAmount = activity.amount;
    let cashAmount = activity.cash_amount;
    let isNegative = "+";
    if (activity.activity_type == "transfer" || activity.activity_type == "selling") {
      isNegative= "-";
    }
    assetAmount = parseFloat(assetAmount).toFixed(6);
    cashAmount = parseFloat(cashAmount).toFixed(2);
    return (
      <div className="amountRecentActivity">
        <p className="assetAmountRecentActivity">{isNegative}{assetAmount}{" "}{activity.asset_type}</p>
        <p className="cashAmountRecentActivity">{"$"}{cashAmount}</p>
      </div>
    );
  }

  renderActivity(activity) {
    return (
      <div key={activity.id} className="transactionsTableRow">
        <div className="firstHalfRecentActivityTableRow">
          {this.getDate(activity.created_at)}
          {this.getImage(activity)}
          {this.getDescription(activity)}
        </div>
        <div className="secondHalfRecentActivityTableRow">{this.getAmount(activity)}</div>
      </div>
    )
  }

  renderActivityList(activitiesArray){
    let activityList = [];
    for (let i = 0; i < activitiesArray.length; i++) {
      if (activitiesArray[i].asset_type == this.props.symbol)
      activityList.push(this.renderActivity(activitiesArray[i]));
    }
    return activityList;
  }
  render() {

    let activitiesArray = [];
    let symbol = this.props.symbol;
    this.props.purchases.forEach(function(purchase){
      if (purchase != null) {
        activitiesArray.push(Object.assign(purchase, {activity_type: "purchase"}));
      }
    });
    this.props.sellings.forEach(function(selling){
      if (selling != null) {
        activitiesArray.push(Object.assign(selling, {activity_type: "selling"}));
      }
    });
    this.props.receivers.forEach(function(receiver){
      if (receiver != null) {
        activitiesArray.push(Object.assign(receiver, {activity_type: "receive"}));
      }
    });
    this.props.transfers.forEach(function(transfer){
      if (transfer != null) {
        activitiesArray.push(Object.assign(transfer, {activity_type: "transfer"}));
      }
    });


    activitiesArray = this.mergesort(activitiesArray);


    if(!activitiesArray) {
      return (
        <div className='loadbar'>
          <GridLoader color="#6495ED" size="10px" margin="4px"/>
        </div>
      );
    }
    return (
      <div className="transactionsYA">
        <p className="transactionsHeader">Transactions</p>
        {this.renderActivityList(activitiesArray)}
      </div>
    );
  }
}

const msp = ({ session }) => (
  {
    wallets: session.wallets, transfers: session.transfers,
    sellings: session.sellings, purchases: session.purchases,
    receivers: session.receivers
  }
);

export default connect(msp) (Transactions);
