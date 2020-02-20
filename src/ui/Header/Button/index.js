import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Button extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button type="button" onClick={this.props.btnHandler}>
        {this.props.btnText}
      </button>
    )
  }
}

Button.PropTypes = {
  btnText: PropTypes.string,
  btnHandler: PropTypes.func
}
