import React from 'react'
import Landing from '../Landing/Landing'
import Content from '../Content/Content'
import './App.scss'

class App extends React.Component {
  constructor () {
    super()
    this.state = {

      portfolioTabList: '',
      currentPortfolioTab: 0,
    }
  }

  // Callback for changing the tab
  changePortfolioTab (tabNumber = -1) {
    const targetTab = (tabNumber === -1)
    setState(targetTab)
    return this.state.currentPortfolioTab
  }

  render() {
    return (
      <div className="container-fluid app">
        <div className="row">
          <Landing />
        </div>
        <div className="row">
          <Content />
        </div>
      </div>
    )
  }
}

export default App