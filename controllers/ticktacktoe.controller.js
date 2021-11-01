const Service = require('../services/ticktacktoe.service');
const Validator = require('../services/validator.service');
const serverPlayer = 'o';

exports.bestNextMove = (req, res) => {
  try {
    const { board } = req.query;
    if (!board) {
      res.status(400).send({
        message: 'Query can not be empty!',
      });
    }

    Validator.validationBoard(board);
    res.send(Service.bestNextMove(board));
  } catch (error) {
    res.status(500).send({
      message:
        error.message || 'Some error occurred while calculate best move.',
    });
  }
};
