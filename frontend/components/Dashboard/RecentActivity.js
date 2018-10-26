import React from 'react';

class RecentActivity extends React.Component {
  constructor(props) {
    super(props);
    this.merge = this.merge.bind(this);
    this.mergesort = this.mergesort.bind(this);
    this.renderActivityList = this.renderActivityList.bind(this);
    this.renderActivity = this.renderActivity.bind(this);
    this.getDate = this.getDate.bind(this);
    let activitiesArray = [];
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


    this.lastFour = []; //most recent activity is lastFour[0]

    if (activitiesArray.length == 0) { //do mothing
    } else if (activitiesArray.length < 4) {
      for (let i = activitiesArray.length - 1; i >= 0; i--){
        this.lastFour.push(activitiesArray[i]);
      }
    } else if (activitiesArray.length >= 4) {
      //grab last four recent activities (transfer, receiver, selling, purchase) of user
      this.lastFour.push(activitiesArray[activitiesArray.length-1]);
      this.lastFour.push(activitiesArray[activitiesArray.length-2]);
      this.lastFour.push(activitiesArray[activitiesArray.length-3]);
      this.lastFour.push(activitiesArray[activitiesArray.length-4]);
    }


  }

  merge(leftArr, rightArr) {
    var sortedArr = [];
      while (leftArr.length && rightArr.length) {
        if (Date.parse(leftArr[0].created_at) <= Date.parse(rightArr[0].created_at)) {
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
    const etcColor = "#00cc99";
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
    if (activity.activity_type == "purchase") {
      underDescription+= "Credited MasterCard *********6955"
    } else if (activity.activity_type == "receive") {
      underDescription+="From  " + asset + " address"
    } else if (activity.activity_type == "transfer") {
      underDescription+="To " + asset + " address"
    } else if (activity.activity_type == "selling") {
      underDescription+="Debited MasterCard *********6955"
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

  getDate(timestamp) {
    let date = Date.parse(timestamp);
    date = new Date(date);
    let day = date.getDay();
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
    assetAmount = parseFloat(assetAmount).toFixed(4);
    cashAmount = parseFloat(cashAmount).toFixed(2);
    return (
      <div className="amountRecentActivity">
        <p className="assetAmountRecentActivity">{isNegative}{assetAmount}{" "}{activity.asset_type}</p>
        <p className="cashAmountRecentActivity">{isNegative + "$"}{cashAmount}</p>
      </div>
    );
  }

  renderActivity(activity) {
    return (
      <div key={activity.id} className="recentActivityTableRow">
        <div className="firstHalfRecentActivityTableRow">
          {this.getDate(activity.created_at)}
          {this.getImage(activity)}
          {this.getDescription(activity)}
        </div>
        <div className="secondHalfRecentActivityTableRow">{this.getAmount(activity)}</div>
      </div>
    )
  }

  addEmptyRow(i) {
    return (
      <div key={i} className="recentActivityTableRow">
        <p className="lessThanFourActivities"> ADD BUY/SELL LINK HERE SOON </p>
      </div>
    );
  }

  renderEmptyList() {
    let returnList = [];
    for (let i = 0; i < 4; i++) {
      returnList.push(this.addEmptyRow(i));
    }
    return (
      returnList
    );
  }

  renderActivityList(){
    let activityList = [];
    if (this.lastFour.length == 0) {
      return this.renderEmptyList();
    } else {
      for (let i = 0; i < this.lastFour.length; i++) {
        activityList.push(this.renderActivity(this.lastFour[i]));
      }
      if (this.lastFour.length < 4) {
        let count = this.lastFour.length;
        while (count < 4) {
          activityList.push(this.addEmptyRow());
          count++;
        }
      }
    }
    return activityList;
  }
  render() {
    return (
      <div className="RecentActivity">
        <div className="headerRA"><p>Recent Activity</p></div>
        {this.renderActivityList()}
        <div className="footerRA">
          <p className="footerRATransform">View your accounts{" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="9" viewBox="0 0 5 9">
            <path d="M5 4.5a.503.503 0 0 1-.143.348L.903 9 0 8.303 3.622 4.5 0 .697.903 0l3.954 4.152c.095.1.143.224.143.348z">
            </path></svg>
          </p>
        </div>
      </div>
    );
  }
}

export default RecentActivity;
