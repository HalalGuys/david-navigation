import React from 'react';
import styles from './styles/EntryStyle.css';

const SearchEntry = (props) => {
  // console.log(props);

  // const formatDate = function (date) {
  //   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  //   let newDate;
  //   newDate = date.slice(0, date.indexOf('T'));
  //   newDate = newDate.split('-');
  //   // console.log(newDate);
  //   let month = months[newDate[1] - 1];
  //   // console.log(month);
  //   let finalString = `${month} ${newDate[0]}`;
  //   return finalString;
  // };
  console.log('props in entry: ', props);
  return (
    <div id={styles.entryContainer}>
      <div id={styles.imageContainer}><
        img src={props.entry.homeImage} id={styles.image}/>
      </div>
      <div id={styles.name}>{props.entry.name}</div>
      <div id={styles.type}>{props.entry.houseStyle}</div>
      <div id={styles.cost}>{props.entry.cost}</div>
    </div>
  );
};

export default SearchEntry;