import React, { Component } from 'react'
import './main.scss'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

App.propTypes = { children: React.PropTypes.node }
App.defaultProps = { children: 0 }

export default App
