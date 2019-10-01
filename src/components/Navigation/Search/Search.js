import React, {Component} from 'react';
import classes from './Search.css';

class Search extends Component {
  state = {
    search: ''
  }
  searchCategory=(event)=> {
    event.preventDefault();
    this.setState({search: event.target.value});
    console.log(this.state.search);
  }
  render () {
  return (
    <div className={classes.Search}>
      <input type="search"  vrednost={this.state.search} onKeyUp={this.searchCategory}  placeholder="search recipe..."/>
    </div>
  );
}

}
export default Search;
