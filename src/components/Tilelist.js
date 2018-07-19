import React, { Component } from 'react';
import Tile from './Tile.js'
import Hogs from '../porkers_data.js'

export default class TileList extends Component {


  hogs = Hogs.map(hog=> {
    return (< Tile
      name={hog.name}
      key={hog.id}
      onClick={() => {
        console.log(hog)
        this.props.chooseHog(hog)
      }} />)
    } )

  sortedHogs = this.hogs.sort((hog1, hog2) => {
    return Math.floor(hog1.weight) - Math.floor(hog2.weight)
  })

  render() {
    console.log(this.sortedHogs);
    return (
      <div className="ui grid container">
        {this.hogs}
      </div>
    )
  }
}
