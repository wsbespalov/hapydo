'use strict';

const todoController = require('../controllers/todo.controller');

module.exports = {
    name: "default",
    register: async (server) => {
        server.route({
            method: "GET",
            path: "/",
            options: {
                auth: false,
                handler: async (request, reply) => {
                    return await todoController.list(request, reply);
                }
            },
        })
    }
};