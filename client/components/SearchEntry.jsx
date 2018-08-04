import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './styles/Entry.css';

const SearchEntry = (props) => {
  const handleClick = () => {
    props.history.push(`/listing/${props.entry.houseId}`);
  }
  return (
    <div id={styles.container}>
      <div id={styles.imageContainer}><
        img src={props.entry.homeImage} id={styles.image}/>
      </div>
      <div id={styles.name} onClick={handleClick}>{props.entry.name}</div>
      <div id={styles.type}>{props.entry.houseStyle}</div>
      <div id={styles.cost}>${props.entry.cost} USD per night</div>
    </div>
  );
};

export default withRouter(SearchEntry);