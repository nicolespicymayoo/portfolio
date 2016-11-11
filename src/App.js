import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Match} from 'react-router'
import AppHeader from './Components/AppHeader'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Contact from './Components/Contact'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppHeader />
          {/*<div className="app-header-divider"></div>*/}
          <NavBar />
          <div className="App-content">
            <Match exactly pattern="/" component={Home} />
            <Match pattern="/contact" component={Contact} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
