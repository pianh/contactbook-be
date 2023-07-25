// Import necessary modules and dependencies (you may need to check if ApiError and ContactService are correctly imported)
const ApiError = require('../api-error');
const ContactService = require('../services/contact.service');
const MongoDB = require('../utils/mongodb.util');

// Create and Save a new Contact
exports.create = async (req, res, next) => {
    if (!req.body?.name) {
        return next(new ApiError(400, 'Name cannot be empty'));
    }
    try {
        const contactService = new ContactService(MongoDB.client);
        const document = await contactService.create(req.body);
        return res.send(document);
    } catch (error) {
        return next(new ApiError(500, 'An error occurred while creating the contact'));
    }
};

exports.findAll = async (req, res, next) => {
    let documents = [];
    try {
        const contactService = new ContactService(MongoDB.client);
        const { name } = req.query;
        if (name) {
            documents = await contactService.findByName(name);
        } else {
            documents = await contactService.find({});
        }
    } catch (error) {
        return next(new ApiError(500, 'An error occurred while retrieving contacts'));
    }
    return res.send(documents);
};
