import React from 'react'
import ReactDOM from 'react-dom'
// import { shallow } from 'enzyme'
import Controls from './index'

const defaultProps = {
  word: 'Test word'
}

describe('Word', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Controls {...defaultProps} />, div)
  })
})
