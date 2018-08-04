import React from 'react';
import $ from 'jquery';
import SearchEntry from './SearchEntry.jsx';
import styles from './styles/SearchStyle.css';

class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: [], matched: []};
    // console.log(this.props.reviews);
  }

  getMatch() {
    let matched = [];
    const listings = this.state.data
    // console.log('listings: ', listings);
    const searchVal = this.props.match.params.id;
    for (let listing of listings) {
      let listingText = listing.name.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').split(' ');
      console.log('listingText: ', listingText);
      for (let word of listingText) {
        console.log('word: ', word);
        // partial matching would be better
        if (word.toLowerCase() === searchVal.toLowerCase()) {
          matched.push(listing);
        }
      }
    }
    console.log('this is matched: ', matched);
    this.setState({matched: matched});
  }

  componentDidMount() {
    // get request retrieves reviews and aggregated values from server
    $.ajax({
      url: '/navigation',
      type: 'GET',
      dataType: 'json',
    }).done((data) => {
      this.setState({data: data});
      this.getMatch();
    }).fail(() => {
      console.log('navigation get request failed');
    });
  }

  render() {
    let searchList = [];
    if (this.state.matched){
      searchList = this.state.matched.map((entry, index) => {
        return <SearchEntry key={index.toString()} entry={entry} />;
      });
    }
    const noItems = (<div><h1>No reviews were found.</h1></div>);
    return (
      // render the navBar here
      <div id={styles.searchContainer}>
        {searchList.length === 0 ? noItems : searchList}
      </div>
    );
  }
}

export default SearchList;