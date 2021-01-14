const { Plank, Task } = require("../models");

const PlankController = {
    async create(req, res) {
        try {
            const plank = await Plank.create(req.body);
            res.status(200).send(plank);
        } catch (error) {
            console.log(error);
      res
        .status(500)
        .send({ message: "Algo ha fallado y el plank no ha sido creado" });
        }
    },
    async getPlankByBoardId(req, res) {
        try {
            const boardId = req.params.id;
            const plank = await Plank.findAll({ 
                where: {
                    boardId: boardId
                } });
            res.send(plank);
        } catch (error) {
            console.log(error);
          res
            .status(500)
            .send({ message: "Algo ha fallado y la lista no ha sido encontrada" });
        }
      },
      async delete(req,res) {
        try {
            const { id } = req.params
            const plank = await Plank.destroy({
                where : {
                    id : id
                }
            })
            res.status(200).send({ message : 'la lista fue eliminada'})
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'Algo ha fallado y la lista no ha sido eliminada'})
        }
    } 
}

module.exports = PlankController;