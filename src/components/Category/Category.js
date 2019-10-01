import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Category from './Category';
import classes from './Category.css';
import Navigation from '../Navigation/Navigation';
import SingleCategory from '../SingleCategory/SingleCategory';


class category extends Component {
  state={
    id:null,
    name:'',
    description:'',
    img: ''
  }
  singleMealHandler= ()=> {
      const name=this.props.history.push('/singleCategory/'+ this.props.name );

  }
  render(){
    return (
    <div className={["col-lg-4", 'p-4'].join(' ')}>

        <div className={['w-100', classes.Category].join(' ')} onClick={this.singleMealHandler} >
          <img src={this.props.img} width='100px'/>
        </div>
        <h3 style={{textAlign:'center'}}>{this.props.name}</h3>
    </div>
    );
  }
}

export default withRouter(category);
