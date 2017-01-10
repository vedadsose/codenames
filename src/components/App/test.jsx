import React from 'react'
import ReactDOM from 'react-dom'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import App from './index'

const defaultProps = {
}

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App {...defaultProps} />, div)
  })

  it('sets the score to zero when starting', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.state('score')).toEqual({ teamA: 0, teamB: 0 })
  })

  it('generates the board when new game is started', () => {
    const wrapper = shallow(<App />)
    wrapper.instance().newGame()
    expect(wrapper.state('words')).toHaveLength(25)
  })

  // it('doesn\t show ')
})
