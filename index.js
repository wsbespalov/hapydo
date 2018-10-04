'use strict';

const dotenv_config = require('dotenv').config();

const Hapi = require('hapi');
const Routes = require('./src/routes');
const Path = require('path');
const mongoose = require('mongoose');
const mongoDbUri = process.env.MONGO_DB_URI || "mongodb://localhost:27017/todos";

const server = Hapi.server({
    host: 'localhost',
    port: 3000
});

const register_db = async () => {
    mongoose.connect(mongoDbUri, { useNewUrlParser: true });
    mongoose.connection
        .on('connected', () => {
            console.log(`Server connected to MongoDB via: ${mongoDbUri}`);
        })
        .on('error', (err) => {
            console.log('Server error with MongoDB: ', err);
            process.exit(1);
        });
};

const register_routes = async () => {
    await server.register(Routes);
};

const register_plugins = async () => {

};

const start_server = async  () => {
    server.start();
};

const init = async () => {
    await register_db();
    await register_routes();
    await register_plugins();
    await start_server();
    console.log(`Server started at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log('Got unhandledRejection: ', err);
    process.exit(1);
});

init();
