import React from 'react';
import Name from '../../partial/name';
import Image from '../../partial/image';
import Born from '../../partial/born';
// import DOB from '../partial/dob'
// import Website from '../partial/website'
import styles from '../../css/authors.module.css';

const Author = (props) => {
  const str = `/authors/${props.author.A_ID}`;
  return (
    <div>
      <a href={str}><Image src={props.author.A_img} style={styles.img} alt="authorImage" /></a>
      <Name name={props.author.Name} />
      <Born born={props.author.Born} />
      {/* <DOB dob={props.author.DOB}/>
            <Website website={props.author.Website} /> */}
    </div>
  );
};

export default Author;
