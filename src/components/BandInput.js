// Add BandInput component
import React, { Component } from 'react'



class BandInput extends Component {
  constructor() {
    super()
    this.state = {
      name: ""
    }
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({ name: "" })

  }

  render() {
    console.log("Current name:", this.state.name)
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Band Name: </label>
            <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.name} />
            <input type="submit" />
          </p>
        </form>
      </div>
    )
  }
}

export default BandInput
