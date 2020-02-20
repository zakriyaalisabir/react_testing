import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Button extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { btnText, btnHandler } = this.props

    return (
      <button type="button" onClick={btnHandler}>
        {btnText}
      </button>
    )
  }
}

Button.PropTypes = {
  btnText: PropTypes.string,
  btnHandler: PropTypes.func
}
