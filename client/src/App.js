import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import JumboTron from './components/JumboTron';
import SearchResults from './components/SearchResults';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <JumboTron />
        <SearchResults />
      </div>
    );
  }
}

export default App;
