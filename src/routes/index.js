const API_DEFAULT_ROUTE = require('./api.default.route');
const API_LIST_ROUTE = require('./api.list.route');
const API_GET_BY_ID_ROUTE = require('./api.get.route');
const API_CREATE_ROUTE = require('./api.create.route');

const routes = [
    API_DEFAULT_ROUTE,
    API_LIST_ROUTE,
    API_GET_BY_ID_ROUTE,
    API_CREATE_ROUTE
];

module.exports = routes;