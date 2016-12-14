import React from 'react'

const Score = ({ id, name, score, image }) => (
  <div className={id}>
    <div className="slider">
      <div className="img">
        <img src={image} role="presentation" />
      </div>
      <div className="win-track" />
      <div className="score">
        <h1 className="name">{ name }</h1>
        <div className="points">
          { score }
        </div>
      </div>
    </div>
  </div>
)

Score.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  score: React.PropTypes.number,
  image: React.PropTypes.string
}

export default Score
