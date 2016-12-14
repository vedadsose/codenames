import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Immutable from 'immutable'
import ScoreBoard from './components/ScoreBoard'
import WordsGrid from './components/WordsGrid'
import Controls from './components/Controls'
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
      first: TEAM_A,
      maxScore: parseInt(prompt('What\'s the max score'))
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
        board: generateBoard(next),
        inProgress: true
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

  updateScore(team) {
    this.setState((prevState) => {
      const score = Immutable.Map(prevState.score).set(team, prevState.score[team] + 1).toObject()
      return {
        score,
        inProgress: false
      }
    })
  }

  handleClick(index) {
    const revealed = this.state.revealed.concat()
    revealed[index] = true
    this.setState({
      revealed
    })

    const totalFields = fieldValue => field => field === fieldValue
    const revealedFields = fieldValue => (field, i) => field === fieldValue && revealed[i]
    const remainingFields = field =>
      this.state.board.filter(totalFields(field)).length -
      this.state.board.filter(revealedFields(field)).length

    if (remainingFields('teamA') === 0) {
      this.updateScore('teamA')
    } else if (remainingFields('teamB') === 0) {
      this.updateScore('teamB')
    } else if (this.state.board[index] === 'assasin') {

    }
  }

  render() {
    const { score, words, board, spoiler, inProgress, revealed, maxScore } = this.state
    return (
      <div>
        <ScoreBoard {...score} maxScore={maxScore} />
        <WordsGrid
          words={words}
          revealed={revealed}
          board={board}
          spoiler={spoiler || !inProgress}
          handleClick={index => this.handleClick(index)}
        />
        <Controls
          newGame={() => this.newGame()}
          next={() => this.nextBoard()}
          spoiler={() => this.toggleSpoiler()}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
