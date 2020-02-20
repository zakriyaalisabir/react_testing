import React from 'react'

import Headline from './Headline'

import Logo from '../../assets/logo.png'

const Header = props => {
  return (
    <header className="container" test-data="testData">
      <Headline headline="Headline" description="desc" />
      <div className="wrap">
        <img className="img" src={Logo} alt="Logo" />
      </div>
    </header>
  )
}

export default Header
