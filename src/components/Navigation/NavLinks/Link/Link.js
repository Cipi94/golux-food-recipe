import React from 'react';
import classes from './Link.css';
const link =(props)=> (
  <li className={classes.Link}>{props.children}</li>
);

export default link;
