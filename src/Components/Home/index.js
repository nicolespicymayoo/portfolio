import React from 'react'
import './index.css'
import LatestWork from '../LatestWork'
import Services from '../Services'
import ContactHeader from '../AppHeader/ContactHeader'

const Home = () => (
  <div className="home">
    {/*<div className="home-header">
      <div className="home-header-hero">
        <h1 className="home-header-title">Coffee & code</h1>
        <h3 className="home-header-subtitle">Beautiful, usable websites & interfaces</h3>
      </div>
    </div>*/}
    <LatestWork />
    <Services />
    {/*<div className="home-section">
      <div className="home-quote">
        <p className="quote">"The best design is the simplest one that works the best"</p>
        <p className="quote author">- Albert Einstein</p>
      </div>
    </div>
    <div className="home-section">

    </div>*/}
  </div>
)

export default Home
