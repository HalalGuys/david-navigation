import React from 'react';
import $ from 'jquery';
import styles from './styles/AppStyle.css';
import Homepage from './Homepage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: [], numReviews: 0, search: false, matched: [], searchedVal: ''};
    // this.searchSubmit = this.searchSubmit.bind(this);
    // this.switchView = this.switchView.bind(this);
  }

  // switchView () {
  //   // let newState = this.state.search ? false : true;
  //   this.setState({search: false});
  // }

  // // possible highlight method https://stackoverflow.com/questions/8644428/how-to-highlight-text-using-javascript
  // searchSubmit(searchVal) {
  //   console.log(searchVal);
  //   let matchingReviews = [];
  //   for (let review of this.state.reviews) {
  //     console.log(review);
  //     // reviewTitle is not currently being rendered
  //     // let reviewTitle = review[0].reviewTitle.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').split(' ');
  //     // for (let word of reviewTitle) {
  //     //   if (word === searchVal) {
  //     //     matchingReviews.push(review);
  //     //   }
  //     // }
  //     let reviewText = review[0].reviewText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').split(' ');
  //     for (let word of reviewText) {
  //       if (word.toLowerCase() === searchVal.toLowerCase()) {
  //         matchingReviews.push(review);
  //       }
  //     }
  //   }
  //   this.setState({matched: matchingReviews});
  //   this.setState({search: true});
  //   this.setState({searchedVal: searchVal});
  //   console.log('Matching: ', matchingReviews);
  // }

  // componentDidMount() {
  //   // get request retrieves reviews and aggregated values from server
  //   $.ajax({
  //     url: `/navigation/${window.location.href.substr(window.location.href.indexOf('listing/') + 8)}`,
  //     type: 'GET',
  //     dataType: 'json',
  //   }).done((data) => {
  //     // separate aggregatedValues to send down to AggregatedReviews
  //     /* the shape of reviews is an array of tuples where the index 0 of the tuple is user info
  //     and index 1 is the associated review info */
  //     console.log('this is data', data);
  //     this.setState({data: data});
  //     // record number of reviews
  //     // this.setState({numReviews: reviews.length});
  //   }).fail(() => {
  //     console.log('reviews get request failed');
  //   });
  // }

  render() {
    // there are three distinct sections to the review component
    return (
      <div className={styles.reviews} id="Reviews">
        <div id={styles.searchSection}>
          <Homepage />
          {/* <Search numReviews={this.state.numReviews} ratings={this.state.aggregatedValues} searchSubmit={this.searchSubmit}/> */}
        </div>
        {/* <div id={styles.aggregatedReviews}>
          {this.state.search ? <Matched searched={this.state.searchedVal} handleClick={this.switchView} reviews={this.state.matched}/> : Object.keys(this.state.aggregatedValues).length && <AggregatedReviews ratings={this.state.aggregatedValues} />}
        </div>
        <div id={styles.reviewList}>
          {this.state.reviews.length && <ReviewList reviews={this.state.search ? this.state.matched : this.state.reviews} />}
        </div> */}
      </div>
    );  
  }
}

export default App;