import React from 'react'
import './index.css'
import LatestWork from '../LatestWork'
import Skills from '../Skills'
import Services from '../Services'
import ContactHeader from '../AppHeader/ContactHeader'
import LogoHeader from '../AppHeader/LogoHeader'
import Header from '../Header'

const Home = () => (
  <div className="home">
    <Header />
    <LatestWork />
    <Skills />
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
