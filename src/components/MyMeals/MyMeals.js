import React, {Component} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Meal from '../Meal/Meal';
import MyMeal from './MyMeal/MyMeal';

import Navigation from '../Navigation/Navigation';
import Auxi from '../../hoc/Auxi';
class MyMeals extends Component {
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
        return <MyMeal
          id={p[key].idMeal}
          name ={p[key].strMeal}
          img ={p[key].strMealThumb}
          key = {index}
        />;
      });

  return (
    <div>
    </div>
  );
}
}

export default MyMeals;
