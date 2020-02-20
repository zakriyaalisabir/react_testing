import React, { Component } from 'react'

class Headline extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { headline, description } = this.props

    return headline && description ? (
      <div data-test="headline-comp">
        <h1 data-test="h1">{headline}</h1>
        <p className="description">{description}</p>
      </div>
    ) : null
  }
}

export default Headline
