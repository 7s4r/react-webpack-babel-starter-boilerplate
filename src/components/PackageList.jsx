import React, { Component } from 'react'
import client from '../lib/rest'
const config = require('../config')

class PackageList extends Component {
  constructor(props) {
    super(props)
    this.state = { packages: [] }
  }

  componentDidMount() {
    client({
      method: 'GET',
      path: `${config.packagesApiUrl}?search=${this.props.inputValue}`
    }).done((response) => {
      this.setState({ packages: response.entity.embedded.packages })
    })
  }

  render() {
    return React.createElement(PackageList, { packages: this.state.packages })
  }
}

PackageList.propTypes = { inputValue: React.PropTypes.string }
PackageList.defaultProps = { inputValue: [] }

export default PackageList
