import React, { Component } from 'react';
export default class TileDetails extends Component {


  render() {
    return (
      <div>
        <img src={require(`../hog-imgs/${this.props.selectedHog.name.split(' ').join('_').toLowerCase()}.jpg`)}/>
        <p>{this.props.selectedHog.name}</p>
        <p>{this.props.selectedHog.specialty}</p>
        <p>{this.props.selectedHog.greased}</p>
        <p>{this.props.selectedHog.weight}</p>
        <p>{this.props.selectedHog.medal}</p>
      </div>
    )
  }

}
