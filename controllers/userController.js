const { User, Token } = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserController = {
    /* getAll(req, res) {
        User.findAll()
            .then(users => res.send(users))
            .catch(error => {
                console.error(error);
                res.status(500).send({ message: 'Ha habido un problema a la hora de traer a todos los usuarios :(' });
            })
    }, */
    async signup(req,res) {
        try {
            const hash = await bcryptjs.hash(req.body.password, 9);
            req.body.password = hash;
            const user = await User.create(req.body);
            res.status(200).send(user)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'Algo ha fallado y el usuario no ha sido creado'});
        }
    },
    async login(req,res) {
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            });
            const isMatch = await bcryptjs.compare(req.body.password, user.password);
            if (!isMatch) {
                throw new Error('Has equivocado el password o el usuario')
            }
            const token = jwt.sign({ id: user.id}, 'bayarri', { expiresIn: '2y' });
            await Token.create({ 
                token: token,
                UserId: user.id,
                revoked: false
            });
            res.send({ user, token })
        } catch (error) {
            console.error(error);
            return res.status(500).send({
                message: 'la has cagado en algun momento.'
            });
        }
    },
    async delete(req,res) {
        try {
            const { id } = req.params
            const user = await User.destroy({
                where : {
                    id : id
                }
            })
            res.status(200).send({ message : 'Usuario eliminado'})
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'Ha habido un problema para eliminar el usuario'})
        }
    },
    async logout(req, res) {
        try {
            /* const id = req.user.id */
            const user = await User.destroy({
                where : {
                    token : req.headers.authorization
                }
            })
            res.status(200).send({ message : 'Succesfully logged out.'})
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem trying to logout.'})
        }
    }

}


module.exports = UserController;