import './index.css'
import {Component} from 'react'

class ScoreCard extends Component {
  onPlayAgain = () => {
    console.log('--> In onPlayAgain()')
    const {restartGame} = this.props
    restartGame()
  }

  render() {
    const {score} = this.props
    return (
      <div className="score-card-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-img"
        />
        <p className="score-card-score-title">YOUR SCORE</p>
        <p className="score-card-score-text">{score}</p>
        <div className="play-again-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset-icon"
          />
          <button
            type="button"
            className="play-again-btn"
            onClick={this.onPlayAgain}
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }
}

export default ScoreCard
