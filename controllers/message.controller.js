const models = require('../models')

module.exports = {
    index: async (req, res) => {
        try {
            const message = await models.message.findAll({
                where: {
                    name: req.params.name
                },
                order: [
                    ['createdAt', 'ASC']
                ]
            });
            res.json(message);
        } catch (err) {
            res.status(500).json({
                message: err.message,
                success: false
            });

        }
    },
    create: async (req, res) => {
        try {
            const message = await models.message.create(req.body);
            // const chat = await models.chat.update({
            //     reply: message.reply
            // }, {
            //     where: {
            //         name: message.name
            //     }
            // });
            res.status(201).json({
                message: 'Successfully created message message',
                data: message,
                success: true
            });
        } catch (err) {
            res.status(500).json({
                message: err.message,
                success: false
            });

        }
    },
    deleteByName: async (req, res) => {
        try {
            const message = await models.message.destroy({
                where: {
                    name: req.params.name
                }
            });
            res.status(200).json({
                message: 'Successfully deleted message',
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
            const message = await models.message.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json({
                message: 'Successfully deleted message',
                success: true
            });
        } catch (err) {
            res.status(500).json({
                message: err.message,
                success: false
            });

        }
    },
    getNotDuplicateName: async (req, res) => {
        try {
            const message = await models.message.findAll({
                order: [
                    ['createdAt', 'DESC']
                ],
            });
            const notDuplicateName = message.filter((item, index) => {
                return message.findIndex(item2 => item2.name === item.name) === index;
            }
            );
            res.json(notDuplicateName);
        } catch (err) {
            res.status(500).json({
                message: err.message,
                success: false
            });

        }
    },
    update: async (req, res) => {
        try {
            const message = await models.message.update(req.body, {
                where: {
                    id: req.params.id
                }
            });

            res.status(200).json({
                message: 'Successfully updated message',
                success: true
            });
        } catch (err) {
            res.status(500).json({
                message: err.message,
                success: false
            });
        }
    },
    show: async (req, res) => {
        try {
            const message = await models.message.findAll({
                where: {
                    id: req.params.id
                }
            });
            res.json(message);
        } catch (err) {
            res.status(500).json({
                message: err.message,
                success: false
            });

        }
    }

}