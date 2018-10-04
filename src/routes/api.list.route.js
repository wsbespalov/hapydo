'use strict';

const todoController = require('../controllers/todo.controller');

module.exports = {
    name: "list",
    register: async (server) => {
        server.route({
            method: "GET",
            path: "/api/list",
            options: {
                auth: false,
                handler: async (request, reply) => {
                    return await todoController.list(request, reply);
                }
            },
        })
    }
};