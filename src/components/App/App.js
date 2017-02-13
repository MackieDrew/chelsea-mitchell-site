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
      <div className="app">
        <Landing />
        <Content />
      </div>
    )
  }
}

export default App