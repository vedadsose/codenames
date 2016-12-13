import React from 'react'
import asi from './img/asi.jpg'
import dzeno from './img/dzeno.png'

const ScoreBoard = ({ teamA, teamB }) => (
  <div id="scoreboard">
    <div className="dzeno-team teamA">
      <div className="slider">
        <div className="img">
          <img src={dzeno} role="presentation" />
        </div>
        <div className="win-track" />
      </div>

      <div className="score">
        <h1 className="name">Dzeno</h1>
        <div className="points">
          { teamA }
        </div>
      </div>

    </div>

    <div className="asi-team teamB">
      <div className="slider">
        <div className="img">
          <img src={asi} role="presentation" />
        </div>
        <div className="win-track" />
      </div>

      <div className="score">
        <h1 className="name">Asi</h1>
        <div className="points">
          { teamB }
        </div>
      </div>

    </div>
  </div>
)

ScoreBoard.propTypes = {
  teamA: React.PropTypes.int,
  teamB: React.PropTypes.int
}

export default ScoreBoard
