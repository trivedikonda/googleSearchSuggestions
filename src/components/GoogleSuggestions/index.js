// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  showFilteredSuggestions = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const filteredList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
        </div>
        <div className="inner-container">
          <div className="search-and-input">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              placeholder="Search Google"
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
              className="input"
            />
          </div>

          <ul className="suggestions-list">
            {filteredList.map(eachSearch => (
              <SuggestionItem
                key={eachSearch.id}
                suggestion={eachSearch.suggestion}
                showFilteredSuggestions={this.showFilteredSuggestions}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
