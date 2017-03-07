import React, { Component } from 'react'
import './index.css'
import ServiceItem from './ServiceItem.js'
import { CodeIcon, ResponsiveIcon, MobileIcon, HeartBrowser } from './ServiceIcons.js'

export default class Services extends Component  {
  render(){
    return(
      <div className="home-section services">
        <div className="section-title">Services</div>
        <div className="services-list">
          <ServiceItem
            serviceItemImage={<CodeIcon />}
            serviceItemTitle="Web Development"
            serviceItemDescription="This is one of the  cool things we do"
          />
          <ServiceItem
            serviceItemImage={<ResponsiveIcon />}
            serviceItemTitle="Responsive Design"
            serviceItemDescription="We create stunning web designs that look great on both desktop and mobile."
          />
          <ServiceItem
            serviceItemImage={<HeartBrowser />}
            serviceItemTitle="UI / UX"
            serviceItemDescription="This is one of the  cool things we do"
          />
          <ServiceItem
            serviceItemImage={<MobileIcon />}
            serviceItemTitle="Mobile Apps"
            serviceItemDescription="This is one of the  cool things we do"
          />
        </div>
      </div>
    )
  }
}
