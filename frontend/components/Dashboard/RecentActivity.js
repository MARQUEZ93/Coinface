import React from 'react';

class RecentActivity extends React.Component {
  constructor(props) {
    super(props);
    this.merge = this.merge.bind(this);
    this.mergesort = this.mergesort.bind(this);
    this.renderActivityList = this.renderActivityList.bind(this);
    let activitiesArray = [];
    this.props.purchases.forEach(function(purchase){
      if (purchase != null) {
        activitiesArray.push(purchase);
      }
    });
    this.props.sellings.forEach(function(selling){
      if (selling != null) {
        activitiesArray.push(selling);
      }
    });
    this.props.receivers.forEach(function(receiver){
      if (receiver != null) {
        activitiesArray.push(receiver);
      }
    });
    this.props.transfers.forEach(function(transfer){
      if (transfer != null) {
        activitiesArray.push(transfer);
      }
    });


    activitiesArray = this.mergesort(activitiesArray);
    let lastFour = [];

    //grab last four recent activies (transfer, receiver, selling, purchase) of user
    lastFour.push(activitiesArray[activitiesArray.length-1]);
    lastFour.push(activitiesArray[activitiesArray.length-2]);
    lastFour.push(activitiesArray[activitiesArray.length-3]);
    lastFour.push(activitiesArray[activitiesArray.length-4]);

  }

  merge(leftArr, rightArr) {
    var sortedArr = [];
      while (leftArr.length && rightArr.length) {
        if (Date.parse(leftArr[0]) <= Date.parse(rightArr[0])) {
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

  renderActivityList(){

  }

  renderActivity(activity) {

  }
  render() {
    return (
      <div className="RecentActivity">
        <div className="headerRA"><p>Recent Activity</p></div>
        <div className="footerRA">
          <p>View your accounts{" "}
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
