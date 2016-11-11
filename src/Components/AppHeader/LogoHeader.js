import React from 'react'
import Logo from './Logo.js'
import './LogoHeader.css'

const LogoHeader = () => (
  <div className="logo-header">
    <Logo height={30} width={30} fill="white"/>
    <h1 className="logo-header-title">Creative Name</h1>
    <div className="logo-header-subtitle">Beautiful, usable websites & interfaces</div>
  </div>
)

export default LogoHeader
