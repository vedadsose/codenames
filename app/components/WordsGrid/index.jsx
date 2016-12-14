import React from 'react'
import Word from '../Word'

const WordsGrid = ({ words, revealed, board, spoiler, handleClick }) => (
  <div id="game">
    { words && words.map((word, i) =>
      <Word
        key={i}
        index={i}
        word={word}
        revealed={(revealed && revealed[i]) || spoiler}
        type={board && board[i]}
        handleClick={handleClick}
      />
    )}
  </div>
)

WordsGrid.propTypes = {
  words: React.PropTypes.arrayOf(React.PropTypes.string),
  revealed: React.PropTypes.arrayOf(React.PropTypes.bool),
  board: React.PropTypes.arrayOf(React.PropTypes.string),
  spoiler: React.PropTypes.bool,
  handleClick: React.PropTypes.func
}

export default WordsGrid
