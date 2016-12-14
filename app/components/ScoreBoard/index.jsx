import React from 'react'
import Score from '../Score'
import asi from './img/asi.jpg'
import dzeno from './img/dzeno.png'

const ScoreBoard = ({ teamA, teamB, maxScore }) => (
  <div id="scoreboard">
    <Score id="teamA" name="Asi" image={asi} score={teamA} maxScore={maxScore} />
    <Score id="teamB" name="Dzeno" image={dzeno} score={teamB} maxScore={maxScore} />
  </div>
)

ScoreBoard.propTypes = {
  teamA: React.PropTypes.number,
  teamB: React.PropTypes.number,
  maxScore: React.PropTypes.number
}

export default ScoreBoard
