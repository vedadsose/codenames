import React from 'react'
import ReactDOM from 'react-dom'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import Controls from './index'

const defaultProps = {
  word: 'Test word',
  newGame: () => true,
  next: () => true,
  spoiler: () => true
}

describe('Word', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Controls {...defaultProps} />, div)
  })

  it('simulates newGame button', () => {
    const onButtonClick = sinon.spy()
    const wrapper = shallow(
      <Controls newGame={onButtonClick} />
    );
    wrapper.find('button.play-btn').simulate('click')
    expect(onButtonClick.calledOnce).toEqual(true)
  })

  it('simulates next button', () => {
    const onButtonClick = sinon.spy()
    const wrapper = shallow(
      <Controls next={onButtonClick} />
    );
    wrapper.find('button.next-btn').simulate('click')
    expect(onButtonClick.calledOnce).toEqual(true)
  })

  it('simulates mouse over spoiler button', () => {
    const onButtonHover = sinon.spy()
    const wrapper = shallow(
      <Controls spoiler={onButtonHover} />
    );
    wrapper.find('button.spoiler-btn').simulate('mouseOver')
    expect(onButtonHover.calledOnce).toEqual(true)
  })

  it('simulates mouse out of spoiler button', () => {
    const onButtonHover = sinon.spy()
    const wrapper = shallow(
      <Controls spoiler={onButtonHover} />
    );
    wrapper.find('button.spoiler-btn').simulate('mouseOut')
    expect(onButtonHover.calledOnce).toEqual(true)
  })
})
