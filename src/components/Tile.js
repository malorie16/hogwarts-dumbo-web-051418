import React, { Component } from 'react';

export default class Tile extends Component {



  render() {
    return (
      <div className="ui eight wide column">
        <p>{this.props.name}</p>
        <img src={require(`../hog-imgs/${this.props.name.split(' ').join('_').toLowerCase()}.jpg`)} onClick={this.props.onClick} />
      </div>
    )
  }

}
