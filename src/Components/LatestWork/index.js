import React from 'react'
import PortfolioItem from './PortfolioItem'
import './index.css'

const LatestWork = () => (
  <div className="home-section">
    <div className="portfolio">
      <div className="section-title">Latest Work</div>
      <div className="portfolio-collage">
        <PortfolioItem
          image={'images/quesly-3.png'}
          link="https://quesly.com/"
          title="Quesly"
          websiteType="Platform"
        />
        <PortfolioItem
          image={'images/portfolio-1.png'}
          link="https://jjartproduction.com/"
          title="JJ Art Productions"
          websiteType="Portfolio"
        />
        <PortfolioItem
          image={'images/small-business-1.png'}
          link="http://www.jingjiangacupuncture.com//"
          title="Jing Jiang Accupuncture"
          websiteType="Small Business"
        />
      </div>
    </div>
  </div>
)

export default LatestWork
