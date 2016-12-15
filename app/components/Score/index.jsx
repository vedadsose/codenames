import React from 'react'

const top = (score, maxScore) => `${90 - ((score / maxScore) * 90)}%`
const bottom = (score, maxScore) => `${((score / maxScore) * 90)}%`

const Score = ({ id, name, score, image, maxScore }) => (
  <div className={id}>
    <div className="slider">
      <div className="img" style={{ bottom: bottom(score, maxScore) }}>
        <img src={image} role="presentation" />
      </div>
      <div className="win-track" style={{ top: top(score, maxScore) }} />
    </div>
    <div className="score">
      <h1 className="name">{ name }</h1>
      <div className="points">
        { score }
      </div>
    </div>
  </div>
)

Score.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  score: React.PropTypes.number,
  image: React.PropTypes.string,
  maxScore: React.PropTypes.number
}

export default Score
