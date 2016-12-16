import React from 'react'
import ReactDOM from 'react-dom'
import ScoreBoard from './index'

const defaultProps = {
  teamA: 0,
  teamB: 0
}

describe('ScoreBoard', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ScoreBoard {...defaultProps} />, div)
  })
})
