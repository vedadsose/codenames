import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import WordsGrid from './index'
import Word from '../Word'

const defaultProps = {
  words: ['test', 'words']
}

describe('WordsGrid', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<WordsGrid {...defaultProps} />, div)
  })

  it('reveals all words when spoiler mode is on', () => {
    const wrapper = shallow(
      <WordsGrid words={['test', 'words']} spoiler />
    )
    expect(wrapper.find(Word).everyWhere(n => n.prop('revealed'))).toEqual(true)
  })

  it('doesn\'t reveal the words when spoiler mode is off', () => {
    const wrapper = shallow(
      <WordsGrid words={['test', 'words']} revealed={[false, false]} inProgress />
    )
    expect(wrapper.find(Word).everyWhere(n => !n.prop('revealed'))).toEqual(true)
  })

  it('dims the revealed words when spoiler mode is on', () => {
    const wrapper = shallow(
      <WordsGrid words={['test', 'words']} revealed={[true, true]} spoiler />
    )
    expect(wrapper.find(Word).everyWhere(n => n.prop('dimmed'))).toEqual(true)
  })

  it('doesn\'t dim the revealed words when spoiler mode is off', () => {
    const wrapper = shallow(
      <WordsGrid words={['test', 'words']} revealed={[true, true]} />
    )
    expect(wrapper.find(Word).everyWhere(n => !n.prop('dimmed'))).toEqual(true)
  })

  it('doesn\'t dim any word when game is over', () => {
    const wrapper = shallow(
      <WordsGrid words={['test', 'words']} revealed={[true, true]} inProgress={false} />
    )
    expect(wrapper.find(Word).everyWhere(n => !n.prop('dimmed'))).toEqual(true)
  })
})
