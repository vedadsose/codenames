import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Word from './index'

const defaultProps = {
  word: 'Test word'
}

describe('Word', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Word {...defaultProps} />, div)
  })

  it('doesn\'t show the word if it\'s not revealed', () => {
    const wrapper = shallow(<Word revealed={false} />)
    expect(wrapper.hasClass('revealed')).toEqual(false)
  })

  it('shows the word if it\'s revealed', () => {
    const wrapper = shallow(<Word revealed />)
    expect(wrapper.hasClass('revealed')).toEqual(true)
  })

  it('dims the word in spoiler mode if it\'s revealed', () => {
    const wrapper = shallow(<Word dimmed />)
    expect(wrapper.hasClass('dimmed')).toEqual(true)
  })
})
