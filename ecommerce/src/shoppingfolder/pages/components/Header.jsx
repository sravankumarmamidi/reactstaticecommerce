

import React from 'react'

const Header = () => {
  return (
    <div className = "header-section">
        <div className="left">
            <div className="title">
                <h1 className='shop-heading'>Shopping Mall</h1>
            </div>
        </div>
        <div className="center">
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Child</li>
                <li>Kids</li>
            </ul>
        </div>
        <div className = "search">
            <input placeholder = "Search" type = "text" />
        </div>

        <div className="right">
            <div className = "sign-in">
                signin/signup
            </div>
        <div className= "cart">
            Cart
        </div>
        </div>
    </div>

  )
}

export default Header
