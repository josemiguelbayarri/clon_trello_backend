const { Task }  = require("../models");

const TaskController = {
    async create(req, res) {
        try {
            const task = await Task.create(req.body);
            res.status(200).send(task);
        } catch (error) {
            console.log(error);
      res
        .status(500)
        .send({ message: "Algo ha fallado y la tarea no ha sido creada" });
        }
    },
    async getTaskByPlankId(req, res) {
        try {
            const plankId = req.params.id;
            const task = await Task.findAll({ 
                where: {
                    plankId: plankId
                } });
            res.send(task);
        } catch (error) {
            console.log(error);
          res
            .status(500)
            .send({ message: "Algo ha fallado y las tareas no han sido encontradas" });
        }
      },
      async delete(req,res) {
        try {
            const { id } = req.params
            const task = await Task.destroy({
                where : {
                    id : id
                }
            })
            res.status(200).send({ message : 'la tarea fue eliminada'})
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'Algo ha fallado y la tarea no ha sido eliminada'})
        }
    } 
}

module.exports = TaskController;