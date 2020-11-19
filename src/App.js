import React, {Component} from 'react';
import {connect} from "react-redux";
import MainPanel from './components/MainPanel';
import LoadingPanel from './components/LoadingPanel';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        { this.props.isLoading ? (<LoadingPanel />) : (<MainPanel />) }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
  }
}

export default connect(mapStateToProps)(App);
