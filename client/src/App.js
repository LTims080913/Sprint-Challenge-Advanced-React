import React from 'react';
import axios from 'axios';
import './App.css';
import { response } from 'express';
import { Players } from './Players';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players") 
    .then(response => {
      console.log(response)
      this.setState(response.data);
    })
    .catch(error => {
      console.log('Houston we have a problem', error)
    })
  };

  // handleSearch = input => {
  //   this.setState({
  //     data: this.state.data.filter(p => {
  //       return p.name.toLowerCase().includes(input);
  //     })
  //   });
  // };

  render() {
    return(
      <div>
        <h1>Sprint Challenge</h1>
        <Players player={p}/>
      </div>
    )
  }





}

export default App