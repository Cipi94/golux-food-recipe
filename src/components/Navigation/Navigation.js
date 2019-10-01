import React from 'react';
import classes from './Navigation.css';
import Search from './Search/Search';
import NavLinks from './NavLinks/NavLinks';
const navigation =(props)=> {
  console.log(props.vrednost);

  return (
  <header className={classes.Navigation}>
    <Search type={props.type} funkcija={props.funkcija}/>
    <NavLinks ime={props.ime} pass={props.pass}/>
  </header>

)};

export default navigation;
