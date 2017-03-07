import React from 'react'
import './PortfolioItem.css'

const PortfolioItem = ({ image, link, title, websiteType }) => (
  <div className="portfolio-item">
    <div className="portfolio-item-image-wrapper">
      <div className="portfolio-item-window-bar">
        <div className="window-button"></div>
        <div className="window-button"></div>
        <div className="window-button"></div>
      </div>
      <div
        className="portfolio-item-image"
        href={link} style={{backgroundImage:'url(' + image +')'}}>
      </div>
    </div>

    <div className="portfolio-item-detail">
      <h3 className="portfolio-item-title">{title}</h3>
      <p className="portfolio-item-website-type">{websiteType}</p>
    </div>
  </div>
)

export default PortfolioItem
