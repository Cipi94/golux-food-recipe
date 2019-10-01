import React, {Component} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Meal from '../Meal/Meal';
import classes from './SingleCategory.css';
import Navigation from '../Navigation/Navigation';
import Auxi from '../../hoc/Auxi';
class SingleCategory extends Component {

  state = {
    meals: {}
  }
  componentDidMount() {
    let catName = this.props.match.params.name;
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`)
      .then(response => {
        this.setState({ meals: response.data.meals });
        console.log(this.state.meals);
      });
  }
  render() {
    let p = this.state.meals;
    let categoryObjects1 = Object.keys(p).map(function(key , index) {
      return <Meal
        id={p[key].idMeal}
        name ={p[key].strMeal}
        img ={p[key].strMealThumb}
        key = {index}
      />;
    });
    return (  <Auxi>
  <Navigation ime={this.props.usrName} pass={this.props.usrPass}/>
      <div className={['col-lg-12', classes.SingleCategory].join(' ')}>
          <div className={'row'}>
            {categoryObjects1}
            {this.props.vrednost}
          </div>
      </div>
      </Auxi>
    );
  }
}

export default withRouter(SingleCategory);
