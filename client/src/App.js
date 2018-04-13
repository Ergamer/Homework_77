import React, { Component } from 'react';
import './App.css';
import AllPosts from "./containers/AllPosts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AllPosts/>
      </div>
    );
  }
}

export default App;
