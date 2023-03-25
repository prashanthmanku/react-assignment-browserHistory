import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

class BrowserHistory extends Component {
  state = {searchInput: '', historyList: []}

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({historyList: initialHistoryList})
  }

  filteredHistoryList = () => {
    const {searchInput, historyList} = this.state
    const updatedHistoryList = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return updatedHistoryList
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  delteHistoryItem = id => {
    const {historyList} = this.state
    const updatedList = historyList.filter(each => each.id !== id)
    this.setState({historyList: updatedList})
  }

  render() {
    const updatedHistoryList = this.filteredHistoryList()
    return (
      <div className="bg-container">
        <div className="nav-Container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo-image"
          />
          <div className="search-bar-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search history"
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        {updatedHistoryList.length === 0 ? (
          <p className="no-history">There is no history to show</p>
        ) : (
          <ul className="history-container">
            {updatedHistoryList.map(eachItem => (
              <HistoryItem
                historyItem={eachItem}
                key={eachItem.id}
                delteHistoryItem={this.delteHistoryItem}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BrowserHistory
