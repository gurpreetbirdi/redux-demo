import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateText} from './actions';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>    
        <input type="text" onChange={e=>{this.props.dispatch(updateText(e.target.value))}}/>
        <div>{this.props.text}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
console.log(state);
  return {
  text : state.text
}
};
export default connect(mapStateToProps)(App);
