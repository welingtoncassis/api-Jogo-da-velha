const clientPlayer = 'x';
const serverPlayer = 'o';

exports.bestNextMove = (boardDecoded) => {
  let origBoard = populateBoard(boardDecoded);
  const result = calculateBestMove(origBoard, serverPlayer);
  console.log(result);
  return result;
};

// ------- private methods ---------

function populateBoard(board) {
  let defaultBoard = [0, 1, 2, 3, 4, 4, 6, 7, 8];

  for (let index = 0; index < defaultBoard.length; index++) {
    if (board[index].trim()) {
      defaultBoard[index] = board[index];
    }
  }
  return defaultBoard;
}

function calculateBestMove(newBoard, player) {
  const availSpots = emptyIndexies(newBoard);
  if (winning(newBoard, clientPlayer)) {
    return { score: -10 };
  } else if (winning(newBoard, serverPlayer)) {
    return { score: 10 };
  } else if (availSpots.length === 0) {
    return { score: 0 };
  }
  let moves = [];

  for (var i = 0; i < availSpots.length; i++) {
    let move = {};
    move.index = newBoard[availSpots[i]];

    newBoard[availSpots[i]] = player;

    if (player == serverPlayer) {
      var result = calculateBestMove(newBoard, clientPlayer);
      move.score = result.score;
    } else {
      var result = calculateBestMove(newBoard, serverPlayer);
      move.score = result.score;
    }

    newBoard[availSpots[i]] = move.index;

    moves.push(move);
  }

  let bestMove;
  if (player === serverPlayer) {
    let bestScore = -10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    let bestScore = 10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }
  return moves[bestMove];
}

function winning(board, player) {
  if (
    (board[0] == player && board[1] == player && board[2] == player) ||
    (board[3] == player && board[4] == player && board[5] == player) ||
    (board[6] == player && board[7] == player && board[8] == player) ||
    (board[0] == player && board[3] == player && board[6] == player) ||
    (board[1] == player && board[4] == player && board[7] == player) ||
    (board[2] == player && board[5] == player && board[8] == player) ||
    (board[0] == player && board[4] == player && board[8] == player) ||
    (board[2] == player && board[4] == player && board[6] == player)
  ) {
    return true;
  } else {
    return false;
  }
}

function emptyIndexies(board) {
  return board.filter((s) => s != 'o' && s != 'x');
}
