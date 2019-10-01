import React from 'react';
import AboutUsText from './AboutUsText/AboutUsText';
import TekstHome from '../TekstHome/TekstHome';
import AboutUsImg from './AboutUsImg/AboutUsImg';
import Categories from '../Categories/Categories';
import classes from './AboutUs.css';
import Auxi from '../../hoc/Auxi';

const aboutUs = (props)=> (
  <Auxi>
    <h3 className={'text-center'}>About Us</h3>
    <div className={classes.AboutUs}>
      <AboutUsText/>
      <AboutUsImg/>
    </div>
  </Auxi>
);

export default aboutUs;
