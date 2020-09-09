import React from 'react';
import Title from '../../partial/title';
// import Name from '../partial/name'
import Image from '../../partial/image.js';
// import Summ ary from '../partial/summary'
import styles from '../../css/books.module.css';

const Book = (props) => {
  //  console.log(props)
  const str = `/books/${props.book.B_ID}`;
  return (
      <div> 
          <a href={str}><Image src={props.book.B_img} style={styles.img} alt="bookImage" /></a>
          <Title title={props.book.bookName} />
          {/* <Name name={props.book.Name} /> */}
          {/* <Summary summary={props.book.Summary} /> */}
        </div>
  );
};

export default Book;
