import React from 'react';
import styles from './styles/NavStyle.css';
import { withRouter } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', toList: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }  

  handleClick() {
    this.props.history.push(`/`);
  }

  handleSubmit(e) {
    // this.setState({toList: true});
    e.preventDefault();
    this.props.watchSearch();
    this.props.history.push(`/list/${this.state.value}`);
    // setTimeout(() => {
    //   this.props.history.push(`/list/${this.state.value}`);
    // }, 10000)
  }   

  // continuosly updates the value of the input box
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  render() {
    return (
      <div id={styles.navContainer}>
        <div id={styles.navSearch}>
          <div id={styles.imageContainer}>
            <img src='https://s3-us-west-1.amazonaws.com/fec-reviews/Halal.jpeg' 
              id={styles.homeImage}
              onClick={this.handleClick}
            />
          </div>
          <div id={styles.highlightBox}>
            <div id={styles.iconContainer}>
              <img id={styles.searchIcon} src='https://s3-us-west-1.amazonaws.com/fec-reviews/search.svg' />
            </div>
            <form id={styles.searchForm} onSubmit={this.handleSubmit}>
              <input id={styles.searchBar} type="text" value={this.state.value} placeholder="Search listings..." onChange={this.handleChange}/>
            </form>
          </div>
        </div>
        <div id={styles.navProfile}>
          <span>Become a host</span>
          <span>Saved</span>
          <span>Trips</span>
          <span>Messages</span>
          <span>Help</span>
          <img src="https://s3-us-west-1.amazonaws.com/fec-reviews/3.jpg" />
        </div>
      </div>
    );
  }
};

export default withRouter(NavBar);