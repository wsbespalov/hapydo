'use strict';

module.exports = {
    name: "list",
    register: async (server) => {
        server.route({
            method: "GET",
            path: "/api/list",
            options: {
                auth: false,
                handler: async (request, reply) => {
                    return 'list';
                }
            },
        })
    }
};