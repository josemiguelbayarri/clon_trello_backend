const { Board } = require('../models');

const BoardController = {
    async create(req,res) {
        try {
            
            const board = await Board.create(req.body);
            res.status(200).send(board)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'Algo ha fallado y el usuario no ha sido creado'});
        }
    }
}

module.exports = BoardController;
