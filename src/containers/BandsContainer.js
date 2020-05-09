import React, { Component } from 'react'
import { connect } from "react-redux"
import BandInput from "../components/BandInput"
import Bands from "../components/Bands"

class BandsContainer extends Component {


  render() {
    console.log("Current Bands:", this.props.bands)
    return (
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />
        <div>
          <h2>All Bands</h2>
          <ul>
            <Bands bands={this.props.bands} />
          </ul>
        </div>
      </div >
    )
  }
}


const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) => (
  { addBand: band => dispatch({ type: "ADD_BAND", band }) }
)

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
