import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

import API from '../api';

export default class tubesList extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    API.delete('users/${this.state.id}')
    .then(res => {
      .then(res => {
        console.log(res);
        console.log(res.data)
    
    })

    const user = {
      name: this.state.name
    };

    axios.post('https://jsonplaceholder.typicode.com/users', { user })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search :
            <input type="text" onChange={this.handleChange} />
          </label>
          <button type="submut">Add</button>
        </form>
      </div>
    )
  }
  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/users')
    .then(res => {
      const lists = res.data;
      this.setState({ lists });
    })
  }
  render() {
    return (
      <ul>
        { this.state.lists.map(list => <li>{list.name}</li>)}
      </ul>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
