exports.validationBoard = (board) => {
    checkLength(board);
    checkCharacter(board);
    checkIfPlayerServerTurn(board);
    return;
};

// ------- private methods ---------
function checkLength(board) {
  if (board.length != 9) {
    throw new Error('The board must contain 9 characters');
  }
}

function checkCharacter(board) {
    for (let index = 0; index < board.length; index++) {
        const element = board[index];
        if(element !== ' ' && element !== 'x' && element !== 'o') {
            throw new Error('invalid board');
        }
    }
}

function checkIfPlayerServerTurn(board) {
  let countO = 0;
  let countX = 0;

  for (let index = 0; index < board.length; index++) {
      const element = board[index];
      if (element === 'x') {
        countX++;
      } else if (element === 'o') {
        countO++;
      }
  }
  if (countO > countX) {
    throw new Error('it is not possible the turn of player "o"');
  }
}
