const models = require('../models');

module.exports = {
    index: async (req, res) => {
        try {
            const chat = await models.chat.findAll({
                order: [
                    ['updatedAt', 'DESC']
                ]
            });
            res.json(chat);
        } catch (err) {
            res.status(500).json({
                message: err.message,
                success: false
            });

        }
    },
    show: async (req, res) => {
        try {
            const chat = await models.chat.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json({
                message: 'Successfully retrieved one chat message',
                data: chat,
                success: true
            });
        } catch (err) {
            res.status(500).json({
                message: err.message,
                success: false
            });

        }
    },
    create: async (req, res) => {
        try {
            const chat = await models.chat.create(req.body);
            res.status(201).json({
                message: 'Successfully created chat message',
                data: chat,
                success: true
            });
        } catch (err) {
            res.status(500).json({
                message: err.message,
                success: false
            });

        }
    },
    update: async (req, res) => {
        try {
            const chat = await models.chat.update(req.body, {
                where: {
                    name: req.params.name
                }
            });
            res.status(200).json({
                message: 'Successfully updated chat message',
                success: true
            });
        } catch (err) {
            res.status(500).json({
                message: err.message,
                success: false
            });

        }
    },
    destroy: async (req, res) => {
        try {
            const chat = await models.chat.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json({
                message: 'Successfully deleted chat message',
                data: chat,
                success: true
            });
        } catch (err) {
            res.status(500).json({
                message: err.message,
                success: false
            });

        }
    }

}