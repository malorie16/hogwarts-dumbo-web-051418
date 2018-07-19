import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import TileList from './Tilelist.js'
import TileDetail from './Tiledetails.js'



class App extends Component {

  state = {
    selectedHog: null,
    selectedValue: 'none'
  }

  handleChange = (value) => {
    this.setState({
      selectedValue: value
    })
  }

  chooseHog = (hog) => {
    this.setState(() => {
      return {selectedHog: hog}
    })
  }

  render() {
    console.log('statechaged:', this.state.selectedValue);
    return (
      <div className="App">
        < Nav selectedValue={this.state.selectedValue} handleChange={this.handleChange}/>
      {this.state.selectedHog ? < TileDetail selectedHog={this.state.selectedHog} /> : null}
      < TileList chooseHog={this.chooseHog} selectedValue={this.state.selectedValue}/>
      </div>
    )
  }
}

export default App;
