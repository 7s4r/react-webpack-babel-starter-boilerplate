import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'
import './search.scss'
import packageList from '../PackageList'

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength < 2 ? [] : packageList(inputValue).filter((pack) =>
    pack.name.toLowerCase().slice(0, inputLength) === inputValue
  )
}

function getSuggestionValue(suggestion) {
  return suggestion.name
}

function renderSuggestion(suggestion) {
  return (
    <a href="#">{suggestion.name}</a>
  )
}

class Search extends Component {
  constructor() {
    super()

    this.state = {
      value: '',
      suggestions: getSuggestions('')
    }

    this.onChange = this.onChange.bind(this)
    this.onSuggestionsUpdateRequested = this.onSuggestionsUpdateRequested.bind(this)
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    })
  }

  onSuggestionsUpdateRequested({ value }) {
    this.setState({
      suggestions: getSuggestions(value)
    })
  }

  render() {
    const { value, suggestions } = this.state
    const inputProps = {
      placeholder: 'Type a keyword...',
      value,
      autoFocus: true,
      onChange: this.onChange
    }

    return (
      <div className="search">
        <form>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
        </form>
      </div>
    )
  }
}

export default Search
