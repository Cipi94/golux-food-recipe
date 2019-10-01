import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import SingleMeal from './components/SingleMeal/SingleMeal';
import Categories from './components/Categories/Categories';
import Navigation from './components/Navigation/Navigation';
import Auxi from './hoc/Auxi';
import SingleCategory from './components/SingleCategory/SingleCategory';
import HomePage from './components/HomePage/HomePage';
import MyMeals from './components/MyMeals/MyMeals';
class App extends Component {
  state ={
    usrName: 1,
    usrPass: 1
  }

  render() {
    console.log(this.state.usrName, 'oved');
      return (
        <Auxi>

          <Switch>
            <Route path="/myMeals" component={ MyMeals } />
            <Route path="/singleCategory/:name/:id" ime={this.state.usrName} pass={this.state.usrPass}  component={ SingleMeal } />
            <Route path="/singleCategory/:name" ime={this.state.usrName} pass={this.state.usrPass}  component={ SingleCategory } />
            <Route path="/" exact  render={props =>
              (<HomePage {...props} ime={this.state.usrName} pass={this.state.usrPass}/>)
            } />
          </Switch>

        </Auxi>
      );
  }
}

export default App;
