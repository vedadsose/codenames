import React from 'react'
import ReactDOM from 'react-dom'
import Score from './index'

const defaultProps = {
  name: 'Team A',
  score: 0
}

describe('Score', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Score {...defaultProps} />, div)
  })
})
