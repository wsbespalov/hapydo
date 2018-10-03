'use strict';

const todoController = require('../controllers/todo.controller');

module.exports = {
    name: "create",
    register: async (server) => {
        server.route({
            method: "POST",
            path: "/api/create",
            options: {
                auth: false,
                handler: async (request, reply) => {
                    return await todoController.create(request, reply);
                }
            },
        })
    }
};