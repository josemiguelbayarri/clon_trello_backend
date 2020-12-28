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
    }
}

module.exports = PlankController;