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
        <ul className="score-and-timer-container">
          <li className="score-container">
            <p className="score-title">
              Score: <span className="score-text">{score}</span>
            </p>
          </li>
          <li className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer"
            />
            <p className="time-text">{seconds} sec</p>
          </li>
        </ul>
      </li>
    )
  }
}

export default NavBar
