import React, {Component} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import classes from './Meal.css';



class Meal extends Component {

  clicked=()=> {
    console.log(this.props
    );
    const name=this.props.history.push('/singleCategory/'+this.props.name+'/' + this.props.id);

  }

  render() {
    return (

    
      <div className={["col-lg-4", 'p-5'].join(' ')}>
        <div className={['w-100', classes.Meal].join(' ')} onClick={this.clicked} >
          <img src={this.props.img} width='100px'/>
        </div>
          <h3 style={{textAlign:'center'}}>{this.props.name}</h3>
      </div>

    );
  }
}
export default withRouter(Meal);
