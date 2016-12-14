import React from 'react'
import Score from '../Score'
import asi from './img/asi.jpg'
import dzeno from './img/dzeno.png'

const ScoreBoard = ({ teamA, teamB }) => (
  <div id="scoreboard">
    <Score id="teamA" name="Asi" image={asi} score={teamA} />
    <Score id="teamB" name="Dzeno" image={dzeno} score={teamB} />
  </div>
)

ScoreBoard.propTypes = {
  teamA: React.PropTypes.number,
  teamB: React.PropTypes.number
}

export default ScoreBoard
