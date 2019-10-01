import React, {Component} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Meal from '../Meal/Meal';
import classes from './SingleMeal.css';
import SingleMealPrint from '../SingleMealPrint/SingleMealPrint';
import Auxi from '../../hoc/Auxi';
class SingleMeal extends Component {

  state = {
    meal: {}
  }
  componentDidMount() {
    let mealId = this.props.match.params.id;
    console.log(mealId, 'Single');
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then(response => {
        console.log(response.data, 'sastojci');
        this.setState({ meal: response.data.meals });

      });
  }
  render() {
    let p = this.state.meal;
    let categoryObjects2 = Object.keys(p).map(function(key , index) {
      return <SingleMealPrint
        id={p[key].idMeal}
        name ={p[key].strMeal}
        img ={p[key].strMealThumb}
        category={p[key].strCategory}
        key = {index}
        area={p[key].strArea}

      />;
    });
    return (
      <Auxi>
        <Navigation/>
        <div className={classes.SingleMeal}>
          {categoryObjects2}
        </div>
      </Auxi>
    );
  }
}

export default withRouter(SingleMeal);
