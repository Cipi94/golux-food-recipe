import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import TekstHome from '../TekstHome/TekstHome';
import SlikaHome from '../SlikaHome/SlikaHome';
import Categories from '../Categories/Categories';
import Auxi from '../../hoc/Auxi';
import AboutUs from '../AboutUs/AboutUs';
import classes from './HomePage.css';

class homePage extends Component{
  render() {console.log(this.props.ime);
    return (
      <Auxi>
        <Navigation ime={this.props.ime} pass={this.props.pass}/>
          <h3 className={'text-center'}>FOOD RECIPE</h3>
          <div className={classes.HomePage}>
          <TekstHome/>
          <SlikaHome/>
          </div>
          <hr/>
          <h3 className={'text-center'}>Categories</h3>
        <Categories/>
        <hr/>
        <AboutUs/>
        <hr/>
            <h3 className={'text-center'}>CONTACT</h3>
      </Auxi>
    );
  }
}

export default homePage;
