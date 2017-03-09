import React, { Component } from 'react'
import { Link } from 'react-router'
import Logo from './Logo.js'
import './index.css'

const routes = [
  { route:  '/',
    name:'home'
  },
  { route:'/about',
    name: 'about'
  },
  { route:'/services',
    name: 'services'
  },
  { route:'/portfolio',
    name: 'portfolio'
  },
  { route:'/contact',
    name: 'contact'
  },
]


export default class NavBar extends Component {
  render() {
    return(
      <div className="navbar">
        <div className="navbar-logo">
          <Logo height={26} width={26} fill="#fafafa"/>
          <div className="navbar-logo-title">Code & Coffee</div>
        </div>
        <div className="navbar-items-container">
          {
            routes.map(routeItem =>
              <Link
                activeOnlyWhenExact
                to={routeItem.route}
                className="navbar-item"
                activeClassName="navbar-item-active"
                key={routeItem.name}
              >
                {routeItem.name}
              </Link>
            )
          }
        </div>
      </div>
    )
  }
}
