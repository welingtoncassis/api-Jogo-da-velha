const Service = require('../services/ticktacktoe.service');
const Validator = require('../services/validator.service');

exports.bestNextMove = (req, res) => {
  try {
    const { board } = req.query;
    if (!board) {
      res.status(400).send({
        message: 'Query can not be empty!',
      });
    }

    Validator.validationBoard(board);
    const result = Service.bestNextMove(board);
    
    res.send(result);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || 'Some error occurred while calculate best move.',
    });
  }
};
