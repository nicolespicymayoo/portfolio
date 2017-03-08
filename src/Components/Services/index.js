import React, { Component } from 'react'
import './index.css'
import ServiceItem from './ServiceItem.js'
import { CodeIcon, ResponsiveIcon, MobileIcon, HeartBrowser, MaintenanceIcon, DeployIcon } from './ServiceIcons.js'

export default class Services extends Component  {
  render(){
    return(
      <div className="home-section services">
        <div className="section-title">Services</div>
        <div className="services-list">
          <div className="services-list-row">
            <ServiceItem
              serviceItemImage={<CodeIcon />}
              serviceItemTitle="Web Development"
              serviceItemDescription="We specialize in building beautiful websites from scratch."
            />
            <ServiceItem
              serviceItemImage={<HeartBrowser />}
              serviceItemTitle="UI / UX"
              serviceItemDescription="All of our work stems from what is best for your goals and for users."
            />
            <ServiceItem
              serviceItemImage={<MobileIcon />}
              serviceItemTitle="Mobile Apps"
              serviceItemDescription="Build your mobile app from scratch using React Native"
            />
          </div>
          <div className="services-list-row">
            <ServiceItem
              serviceItemImage={<DeployIcon />}
              serviceItemTitle="Deployment"
              serviceItemDescription="Set up your new website on your favorite domain name"
            />
            <ServiceItem
              serviceItemImage={<ResponsiveIcon />}
              serviceItemTitle="Responsive Design"
              serviceItemDescription="Stunning web designs that look great on desktop, mobile, and any screen in between."
            />
            <ServiceItem
              serviceItemImage={<MaintenanceIcon />}
              serviceItemTitle="Maintenace"
              serviceItemDescription="Keep your website, technology, and information up to date "
            />
          </div>
        </div>
      </div>
    )
  }
}
