import React from 'react'
import logo from './google-cast-logo.svg'

const Controls = ({ newGame, next, spoiler }) => (
  <div id="controls">
    <button is="google-cast-button" class="cast-btn">
      <img src={logo} alt="cast-icon" />
    </button>
    <button className="play-btn" onClick={newGame}>NEW GAME</button>
    <button className="next-btn" onClick={next}>NEXT</button>
    <button
      className="spoiler-btn"
      onMouseOver={() => spoiler()}
      onMouseOut={() => spoiler()}
    >
      SPOILER
    </button>
  </div>
)

Controls.propTypes = {
  newGame: React.PropTypes.func,
  next: React.PropTypes.func,
  spoiler: React.PropTypes.func
}

export default Controls
