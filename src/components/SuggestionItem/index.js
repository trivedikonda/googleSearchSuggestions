// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, showFilteredSuggestions} = props
  const {suggestion} = suggestionDetails

  const onClickArrow = () => {
    showFilteredSuggestions(suggestion)
  }
  return (
    <li className="suggestion">
      <p className="para">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onClickArrow}
      />
    </li>
  )
}

export default SuggestionItem
