import React from 'react'
import {Match, Miss} from 'react-router'
import LogoHeader from './LogoHeader.js'
import ServicesHeader from './ServicesHeader.js'
import ContactHeader from './ContactHeader.js'
import NavBar from '../NavBar'
import './index.css'

const AppHeader = () => (
  <div className="App-header">
  <Match pattern="/contact" component={ContactHeader} />
  <Match pattern="/services" component={LogoHeader} />
  <NavBar />
  </div>
)

export default AppHeader
