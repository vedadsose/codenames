import React from 'react'
import classnames from 'classnames'

const Word = ({ index, word, revealed, type, handleClick }) => (
  <button
    className={classnames({ word: true, revealed, [type]: true })}
    onClick={() => handleClick(index)}
  >
    { word }
  </button>
)

Word.propTypes = {
  index: React.PropTypes.number,
  word: React.PropTypes.string,
  revealed: React.PropTypes.bool,
  type: React.PropTypes.string,
  handleClick: React.PropTypes.func
}

export default Word
