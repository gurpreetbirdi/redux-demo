import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {updateText} from './actions';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" onChange={e=>{this.props.dispatch(updateText(e.target.value))}}/>
        <div>{this.props.text}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text : state.text
});
export default connect(mapStateToProps)(App);
