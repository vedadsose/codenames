import _ from 'underscore'

export default (first) => {
  const teamA = first === 0 ? 9 : 8;
  const teamB = first === 1 ? 9 : 8;

  const board = new Array(25);
  board.fill('teamA', 0, teamA);
  board.fill('teamB', teamA, teamA + teamB);
  board.fill('neutral', teamA + teamB);
  board[board.length - 1] = 'assasin';

  return _.shuffle(board);
}
