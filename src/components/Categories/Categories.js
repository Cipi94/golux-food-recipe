import React, {Component} from 'react';
// import Layout from './components/Layout/Layout';
// import Categories from './containers/Categories/Categories';
import { withRouter } from 'react-router-dom';
import classes from './Categories.css';
import Category from '../Category/Category';
import axios from 'axios';

class Categories extends Component {
  state = {
    categories: {},
  }

  componentDidMount() {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        this.setState({categories: response.data.categories});
        console.log(this.state.categories);
      });
  }
  render() {

    // console.log(this.state.categories);
      let p = this.state.categories;
      let categoryObjects =Object.keys(p).map(function(key , index)
    {
      return <Category
        id={p[key].idCategory}
        name ={p[key].strCategory}
        description ={p[key].strCategoryDescription}
        img ={p[key].strCategoryThumb}
        key = {index}
      />;
    });
    categoryObjects.filter(
      (category) => {
        return category.name
      }
    );
      return (
        <div className={['col-lg-12', classes.Categories].join(' ')}>
            <div className={'row'}>
              {categoryObjects}
            </div>
        </div>
      );
  }
}

export default  withRouter(Categories);
