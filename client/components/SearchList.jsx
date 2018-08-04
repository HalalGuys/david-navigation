import React from 'react';
// import { withRouter } from 'react-router-dom';
import $ from 'jquery';
import SearchEntry from './SearchEntry.jsx';
import NavBar from './NavBar.jsx';
import styles from './styles/Search.css';

class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: [], matched: [], newSearch: false};
    // console.log(this.props.reviews);
  }

  watchSearch() {
    this.setState({newSearch: true});
  }

  getMatch() {
    let matched = [];
    const listings = this.state.data
    const searchVal = this.props.match.params.id;
    for (let listing of listings) {
      let listingText = listing.name.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').split(' ');
      for (let word of listingText) {
        // partial matching would be better
        if (word.toLowerCase() === searchVal.toLowerCase()) {
          matched.push(listing);
        }
      }
    }
    this.setState({matched: matched});
  }

  componentDidUpdate() {
    // this.getData();
    if (this.state.newSearch) {
      this.setState({newSearch: false});
      this.getMatch();
    }
  }

  getData() {
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

  componentDidMount() {
    // get request retrieves reviews and aggregated values from server
    this.getData();
  }

  render() {
    let searchList = [];
    if (this.state.matched){
      searchList = this.state.matched.map((entry, index) => {
        return <SearchEntry key={index.toString()} entry={entry} />;
      });
    }
    const noItems = (<div><h1>No reviews were found.</h1></div>);
    // const NavBarWithRouter = withRouter(NavBar);
    return (
      // render the navBar here
      <div id={styles.searchPage}>
        <div id={styles.nav}>
          <NavBar watchSearch={this.watchSearch.bind(this)} />
        </div>
        <div id={styles.searchContainer}>
          {searchList.length && searchList}
        </div>
      </div>
    );
  }
}

export default SearchList;