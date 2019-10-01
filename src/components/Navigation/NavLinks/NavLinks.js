import React from 'react';
import {Route} from 'react-router-dom';
import classes from './NavLinks.css';
import Link from './Link/Link';
import Categories from '../../Categories/Categories';

const navLinks =(props)=> {


  const jela = <Link>My Meals</Link>;

  return(

      <ul className={classes.NavLinks}>      
        <Link to='/'>Home</Link>
        <Link>About Us</Link>
        <Link>Contact</Link>
        {props.ime===1 && props.pass ===1?jela:null}
      </ul>

  );
}

export default navLinks;
