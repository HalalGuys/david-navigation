import React from 'react';
import styles from './styles/HomeStyle.css';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }  

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchSubmit(this.state.value);
  }

  // continuosly updates the value of the input box
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div id={styles.homepage}>
        <div id={styles.message}>
          Discover your next adventure
        </div>
        <div id={styles.barContainer}>
            {/* highlight box is added so both icon and input are highlighted when input is in focus */}
            <div id={styles.highlightBox}>
              <div id={styles.iconContainer}>
                <img id={styles.searchIcon} src='https://s3-us-west-1.amazonaws.com/fec-reviews/search.svg' />
              </div>
              <form id={styles.searchForm} onSubmit={this.handleSubmit}>
                <input id={styles.searchBar} type="text" value={this.state.value} placeholder="Search reviews..." onChange={this.handleChange}/>
              </form>
            </div>
          </div>
      </div>
      // <div id={styles.homeContainer}>
      //   Hi
      // </div>
    );
  }
};

export default Homepage;