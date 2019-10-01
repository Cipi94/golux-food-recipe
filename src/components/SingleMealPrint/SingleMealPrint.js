import React, {Component} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import classes from './SingleMealPrint.css'
import Auxi from '../../hoc/Auxi';
class SingleMealPrint extends Component {



  render() {
    return (
      <Auxi>
      <h3 className={'text-center'}>{this.props.name}</h3>

        <div className={[classes.SingleMealPrint, 'mt-5'].join(' ')}>
          <img src={this.props.img} width='100px'/>
          <p>Category:<strong>{this.props.category}</strong></p>
          <p>Country: <strong>{this.props.area}</strong></p>
        </div>


      </Auxi>
    );
  }
}

export default withRouter(SingleMealPrint);
