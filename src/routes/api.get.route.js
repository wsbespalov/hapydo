'use strict';

const todoController = require('../controllers/todo.controller');

module.exports = {
    name: "get",
    register: async (server) => {
        server.route({
            method: "GET",
            path: "/api/get/{id}",
            options: {
                auth: false,
                handler: async (request, reply) => {
                    return await todoController.get(request, reply);
                }
            },
        })
    }
};