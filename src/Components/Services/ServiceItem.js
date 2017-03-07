import React from 'react'
import './ServiceItem.css'

const ServiceItem = ({serviceItemImage, serviceItemTitle, serviceItemDescription}) => (
  <div className="service-item">
    <div className="service-item-image">{serviceItemImage}</div>
    <div className="service-item-title">{serviceItemTitle}</div>
    <div className="service-item-description">{serviceItemDescription}</div>
  </div>
)

export default ServiceItem
