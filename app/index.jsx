import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ScoreBoard from './components/ScoreBoard'
import WordsGrid from './components/WordsGrid'
import getWords from './helpers/getWords'
import generateBoard from './helpers/generateBoard'
import './style/index.scss'

const TEAM_A = 0
const TEAM_B = 1

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: {
        teamA: 0,
        teamB: 0
      },
      spoiler: false
    }
  }

  componentDidMount() {
    this.newGame()
  }

  newGame() {
    this.setState({
      first: TEAM_A
    })

    this.nextBoard()
  }

  nextBoard() {
    this.setState((prevState) => {
      const next = Math.abs(1 - prevState.first)
      return {
        words: getWords(),
        revealed: new Array(25).fill(false),
        first: next,
        board: generateBoard(next)
      }
    })
  }

  toggleSpoiler() {
    this.setState((prevState) => {
      return {
        spoiler: !prevState.spoiler
      }
    })
  }

  handleClick(index) {
    const revealed = this.state.revealed.concat()
    revealed[index] = true
    this.setState({
      revealed
    })
  }

  render() {
    const { score, words, board, spoiler, revealed } = this.state
    return (
      <div>
        <ScoreBoard {...score} />
        <WordsGrid
          words={words}
          revealed={revealed}
          board={board}
          spoiler={spoiler}
          handleClick={index => this.handleClick(index)}
        />
        <button onClick={() => this.newGame()}>start</button>
        <button onClick={() => this.nextBoard()}>next</button>
        <button
          onMouseOver={() => this.toggleSpoiler()}
          onMouseOut={() => this.toggleSpoiler()}
        >
          spoiler
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
