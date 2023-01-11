import './index.css'
import {Component} from 'react'

class NavBar extends Component {
  render() {
    const {score, seconds} = this.props

    return (
      <li className="navbar-inner-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
        <div className="score-and-timer-container">
          <div className="score-container">
            <p className="score-title">
              Score: <span className="score-text">{score}</span>
            </p>
          </div>
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer"
            />
            <p className="time-text">{seconds} sec</p>
          </div>
        </div>
      </li>
    )
  }
}

export default NavBar
