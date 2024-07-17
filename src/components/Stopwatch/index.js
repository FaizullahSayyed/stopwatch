import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {timer: new Date(2024, 1, 1, 1, 0, 0), timerState: false}

  componentDidMount() {
    this.timerId = setInterval(this.changeTime, 1000)
    console.log('tik')
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  changeTime = () => {
    const {timer, timerState} = this.state
    const newTime = new Date(timer.getTime() + 1000)
    if (timerState) {
      this.setState({timer: newTime})
    }
  }

  onStart = () => this.setState({timerState: true})

  onStop = () => this.setState({timerState: false})

  onReset = () =>
    this.setState({timer: new Date(2024, 1, 1, 1, 0, 0), timerState: false})

  render() {
    const {timer} = this.state

    const minutes = timer.getMinutes()
    const seconds = timer.getSeconds()

    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="stopwatch-card">
            <h1 className="main-heading">Stopwatch</h1>
            <div className="timer-container">
              <div className="logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  className="stopwatch-logo"
                  alt="stopwatch"
                />
                <p className="timer-text">Timer</p>
              </div>
              <h1 className="timer">
                {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </h1>
              <div className="buttons-container">
                <button
                  type="button"
                  className="button green"
                  onClick={this.onStart}
                >
                  Start
                </button>
                <button
                  type="button"
                  className="button red"
                  onClick={this.onStop}
                >
                  Stop
                </button>
                <button
                  type="button"
                  className="button yellow"
                  onClick={this.onReset}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
