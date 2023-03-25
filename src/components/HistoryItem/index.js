import './index.css'

const HistoryItem = props => {
  const {historyItem, delteHistoryItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItem
  const onDeleteitem = () => {
    delteHistoryItem(id)
  }
  return (
    <li className="history-item-container">
      <div className="content-container">
        <p className="time">{timeAccessed}</p>
        <div className="logo-container">
          <img src={logoUrl} alt="domain logo" className="domain-image" />
          <div className="domain-container">
            <p className="domain-title">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button data-testid="delete" type="button" onClick={onDeleteitem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default HistoryItem
