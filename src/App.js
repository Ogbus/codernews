import React, { Component } from 'react';
import Search from './components/Search/Search';
import Table from './components/Table/Table';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'React',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

// function isSearched (searchTerm) {
//   return function(item) {
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      searchTerm: '',
    }
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value});
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }
  
  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="page">
        <div className = 'interactions'>
          <Search 
            value = {searchTerm} 
            onChange = {this.onSearchChange} 
          >
            Search
          </Search>
        </div>
        <Table 
          list={list} 
          pattern = {searchTerm} 
          onDismiss = {this.onDismiss} 
        />
      </div>
    );
  }
}

export default App;
