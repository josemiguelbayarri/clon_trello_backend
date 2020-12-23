const { Board } = require("../models");

const BoardController = {
  async create(req, res) {
    try {
      const board = await Board.create(req.body);
      res.status(200).send(board);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: "Algo ha fallado y el tablero no ha sido creado" });
    }
  },

  async getBoardsByUser(req, res) {
    try {
        const userId = req.params.id;
        const board = await Board.findAll({ 
            where: {
                userId: userId
            } });
        res.send(board);
    } catch (error) {
        console.log(error);
      res
        .status(500)
        .send({ message: "Algo ha fallado y el tablero no ha sido encontrado" });
    }
  },
  async getBoardById(req, res) {
    try {
        const boardId = req.params.id;
        const board = await Board.findOne({ 
            where: {
                id: boardId
            } });
        res.send(board);
    } catch (error) {
        console.log(error);
      res
        .status(500)
        .send({ message: "Algo ha fallado y el tablero no ha sido encontrado" });
    }
  },
};

module.exports = BoardController;
