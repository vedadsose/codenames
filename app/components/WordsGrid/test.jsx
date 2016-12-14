import React from 'react'
import ReactDOM from 'react-dom'
import WordsGrid from './index'

const defaultProps = {
  words: ['test', 'words']
}

describe('WordsGrid', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<WordsGrid {...defaultProps} />, div)
  })
})
