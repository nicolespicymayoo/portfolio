import React from 'react'
import {Match, Miss} from 'react-router'
import ContactHeader from './ContactHeader.js'
import LogoHeader from './LogoHeader.js'
import './index.css'

const AppHeader = () => (
  <div className="App-header">
    <Match pattern="/contact" component={ContactHeader} />
    <Match exactly pattern="/" component={LogoHeader} />
    <Miss component={LogoHeader} />
  </div>
)

export default AppHeader
