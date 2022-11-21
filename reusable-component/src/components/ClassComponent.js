import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    return (
      <h1>hey my {this.props.id} name is {this.props.name}</h1>
    )
  }
}

export default Welcome