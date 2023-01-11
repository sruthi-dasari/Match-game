import './index.css'
import {Component} from 'react'
import ScoreCard from '../ScoreCard'
import Game from '../Game'
import NavBar from '../NavBar'

const initialState = {
  score: 0,
  seconds: 60,
  isGameOver: false,
}

class Matchgame extends Component {
  state = initialState

  componentDidMount() {
    console.log('==> In componentDidMount()')
    this.startTimer()
  }

  restartGame = () => {
    this.setState(initialState)
    this.startTimer()
  }

  clearTimerInterval = () => {
    console.log('--> In clearTimerInterval()')
    clearInterval(this.intervalId)
  }

  decrementElapsedseconds = () => {
    console.log('--> In decrementElapsedseconds()')
    const {seconds} = this.state

    if (seconds !== 0) {
      this.setState(prevState => ({seconds: prevState.seconds - 1}))
    } else {
      this.setState({isGameOver: true})
      this.clearTimerInterval()
    }
  }

  checkGameState = () => {
    console.log('--> In checkGameState()')
    const {seconds} = this.state

    if (seconds === 0) {
      console.log('Seconds became 0')
      this.setState({isGameOver: true})
      this.clearTimerInterval()
    }
  }

  updateScore = () => {
    this.setState(prevState => ({score: prevState.score + 1}))
  }

  updateSeconds = () => {
    this.setState(prevState => ({seconds: prevState.seconds - 1}))
  }

  clearTimerInterval = () => {
    console.log('--> In clearTimerInterval()')
    clearInterval(this.intervalId)
  }

  decrementElapsedseconds = () => {
    // const {updateSeconds, clearTimerInterval} = this.props
    console.log('--> In decrementElapsedseconds()')
    const {seconds} = this.state

    if (seconds !== 0) {
      this.updateSeconds()
    } else {
      this.setState({isGameOver: true})
      this.clearTimerInterval()
    }
  }

  updateGameStatus = () => {
    this.setState({isGameOver: true})
  }

  startTimer() {
    console.log('==> In startTimer()')
    this.intervalId = setInterval(this.decrementElapsedseconds, 1000)
  }

  render() {
    console.log('--> In MatchGame render()')
    const {seconds, isGameOver, score} = this.state
    console.log(`seconds in MatchGame: ${seconds}`)

    const showGameOrScore = isGameOver ? (
      <ScoreCard score={score} restartGame={this.restartGame} />
    ) : (
      <Game
        updateScore={this.updateScore}
        updateGameStatus={this.updateGameStatus}
      />
    )

    return (
      <div className="app-container">
        <ul className="navbar-container">
          <NavBar score={score} seconds={seconds} />
        </ul>
        <div className="main-container">{showGameOrScore}</div>
      </div>
    )
  }
}

export default Matchgame
