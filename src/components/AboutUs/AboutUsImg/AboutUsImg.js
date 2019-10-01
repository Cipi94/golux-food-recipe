import React from 'react';
import classes from './AboutUsImg.css';
import headerImg from '../../../assets/Images/HEADER IMAGE.png';
const aboutUsImg =(props)=> (
  <div className={classes.AboutUsImg}>
    <img src={headerImg} alt="slika about us"/>
  </div>
);

export default aboutUsImg;
