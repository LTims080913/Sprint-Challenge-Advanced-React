import React from 'react';
import axios from 'axios';
import './App.css';
import { Players } from './Players';
import { SearchForm } from './SearchForm';

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
      this.setState({
        data: response.data});
    })
    
    .catch(error => {
      console.log('Houston we have a problem', error)
    })
  };

  handleSearch = input => {
    this.setState({
      data: this.state.data.filter(p => {
        return p.name.toLowerCase().includes(input);
      })
    });
  };
 
  render() {
    return(
      <div className="App">
        <h1>Women's World Cup</h1>
        <SearchForm handleSearch={this.handleSearch} />
        {this.state.data.map(item => {
          return <Players player={item} />
          
        })}
      </div>
    )
  }





}

export default App