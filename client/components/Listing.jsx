import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import styles from './styles/ListingStyle.css';


const Listing = () => {
  return (
    <div id={styles.listingPage}>
      <NavBar />
      <window.Photos />
      <window.Details />
      <window.Book />
      <window.Reviews />
    </div>
  );
}

export default withRouter(Listing);