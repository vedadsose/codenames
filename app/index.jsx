import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ScoreBoard from './components/ScoreBoard'
// import Board from './components/Board'
import getWords from './helpers/getWords'
import './style/index.scss'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: {
        teamA: 0,
        teamB: 0
      },
      words: []
    };
  }

  start() {
    this.setState({
      words: getWords()
    })
  }

  render() {
    const { score } = this.state
    return (
      <div>
        <ScoreBoard {...score} />
        { /* <Board /> */ }
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
