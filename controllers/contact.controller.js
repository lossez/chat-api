const models = require('../models');

module.exports = {
    index: async (req, res) => {
        try {
            const contact = await models.contact.findAll({
                order: [
                    ['name', 'ASC']
                ]
            });
            res.json(contact);
        } catch (err) {
            res.status(500).json({
                message: err.message,
                success: false
            });

        }
    },
    show: async (req, res) => {
        try {
            const contact = await models.contact.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json({
                message: 'Successfully retrieved one contact',
                data: contact,
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
            const contact = await models.contact.create(req.body);
            res.status(201).json({
                message: 'Successfully created contact',
                data: contact,
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
            const contact = await models.contact.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json({
                message: 'Successfully updated contact',
                data: contact,
                success: true
            });
        } catch (err) {
            res.status(500).json({
                message: err.message,
                success: false
            });

        }
    },
    delete: async (req, res) => {
        try {
            const contact = await models.contact.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json({
                message: 'Successfully deleted contact',
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