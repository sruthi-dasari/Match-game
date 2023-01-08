import './index.css'
import {Component} from 'react'

class TabItem extends Component {
  onTabClick = () => {
    console.log('--> In onTabClick()')
    const {tabDetails, updateActiveTabId} = this.props
    const {tabId} = tabDetails

    updateActiveTabId(tabId)
  }

  render() {
    const {tabDetails, isActive} = this.props
    const {displayText} = tabDetails

    const activeTabClassname = isActive ? 'active-tab-btn' : ''

    return (
      <li className="tab-item-container">
        <button
          className={`tab-btn ${activeTabClassname}`}
          type="button"
          onClick={this.onTabClick}
        >
          {displayText}
        </button>
      </li>
    )
  }
}

export default TabItem
