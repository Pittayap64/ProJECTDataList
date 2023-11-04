const { Broom } = require('../models')

module.exports = {
    //get all
    async index(req, res) {
        try {
            const brooms = await Broom.findAll()
            res.send(brooms)
        } catch (err) {
            res.status(500).send({
                error: 'the Broom information was incorrect'
            })
        }
    },


    // create
    async create(req, res) {
        try {
            const broom = await Broom.create(req.body)
            res.send(broom.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Broom incorrect'
            })
        }
    },

 // edit
 async put(req, res) {
    try {
        await Broom.update(req.body, {
            where: {
                id: req.params.broomId
            }
        })
        res.send(req.body)
    } catch (err) {
        res.status(500).send({
            error: 'Update Broom incorrect'
        })
    }
},


    // delete
    async delete(req, res) {
        try {
            const broom = await Broom.findOne({
                where: {
                    id: req.params.broomId
                }
            })
            if (!broom) {
                return res.status(403).send({
                    error: 'The Broom information was incorrect'
                })
            }
            await broom.destroy()
            res.send(broom)
        } catch (err) {
            res.status(500).send({
                error: 'The Broom information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const broom = await Broom.findByPk(req.params.broomId)
            res.send(broom)
        } catch (err) {
            res.status(500).send({
                error: 'The Broom information was incorrect'
            })
        }
    },
}
