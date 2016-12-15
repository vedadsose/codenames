import React, { Component } from 'react'
import Immutable from 'immutable'
import Modal from 'react-modal'
import cast from '../../helpers/chromecast'
import ScoreBoard from '../ScoreBoard'
import WordsGrid from '../WordsGrid'
import Controls from '../Controls'
import getWords from '../../helpers/getWords'
import generateBoard from '../../helpers/generateBoard'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: {
        teamA: 0,
        teamB: 0
      },
      spoiler: false,
      maxScore: 0,
      assasin: false
    }
  }

  componentDidUpdate() {
    cast(this.state)
  }

  newGame(maxScore) {
    this.setState({
      first: 0, // 0 - Team A, 1 - Team B
      maxScore
    })

    this.nextBoard()
  }

  nextBoard() {
    this.setState((prevState) => {
      const first = Math.abs(1 - prevState.first)
      return {
        words: getWords(),
        revealed: new Array(25).fill(false),
        first,
        board: generateBoard(first),
        inProgress: true
      }
    })
  }

  toggleSpoiler() {
    this.setState(prevState => ({
      spoiler: !prevState.spoiler
    }))
  }

  updateScore(team) {
    this.setState((prevState) => {
      const score = Immutable.Map(prevState.score).set(team, prevState.score[team] + 1).toObject()
      return {
        score,
        assasin: false,
        inProgress: false
      }
    })
  }

  resetGame() {
    this.setState({
      maxScore: 0,
      score: {
        teamA: 0,
        teamB: 0
      }
    })
  }

  revealWord(index) {
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
      this.setState({
        assasin: true,
        inProgress: false
      })
    }
  }

  render() {
    const { score, words, board, spoiler, inProgress, revealed, assasin, maxScore } = this.state
    return (
      <div>
        <ScoreBoard {...score} maxScore={maxScore} />

        <WordsGrid
          words={words}
          revealed={revealed}
          board={board}
          spoiler={spoiler || !inProgress}
          handleClick={index => this.revealWord(index)}
        />

        <Controls
          newGame={() => this.newGame()}
          next={() => this.nextBoard()}
          spoiler={() => this.toggleSpoiler()}
        />

        <Modal
          contentLabel="New game"
          isOpen={maxScore === 0}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="max-score-modal">
            <h2>Please choose the max score</h2>
            {
              [3, 5, 7, 10, 15].map(i =>
                <button
                  key={i}
                  className="max-score-btn"
                  onClick={() => this.newGame(i)}
                >
                  { i }
                </button>
              )
            }
          </div>
        </Modal>

        <Modal
          contentLabel="Game over"
          isOpen={inProgress && (maxScore === score.teamA || maxScore === score.teamB)}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="text-center">
            Congrats! Team { maxScore === score.teamA ? 'A' : 'B' } won the game :)
            <br /><br />
            <button
              className="btn btn-blue"
              onClick={() => this.resetGame()}
            >
              Start new game
            </button>
          </div>
        </Modal>

        <Modal
          contentLabel="Assasin click"
          isOpen={assasin}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="max-score-modal">
            <h2>Who clicked the assasin?</h2>
            <button className="btn btn-red" onClick={() => this.updateScore('teamB')}>Team A</button>
            <button className="btn btn-blue" onClick={() => this.updateScore('teamA')}>Team B</button>
          </div>
        </Modal>
      </div>
    )
  }
}
