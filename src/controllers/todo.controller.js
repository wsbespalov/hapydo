'use strict';

const Boom = require( "boom" );

const Todo = require('../schemas/todo.schema');

const ALLOW_CONSOLE = process.env.ALLOW_CONSOLE || false;

var validateString = (x) => {return x || 'example'};
var validateDate = (x) => {return x || x};

var validateTitle = (x) => {return validateString(x)};
var validateContent = (x) => {return validateString(x)};

var validateCreatedAt = (x) => {validateDate(x)};
var validateCompleteBefore = (x) => {validateDate(x)};

const list = async (request, reply) => {
    console.log(`[+] List all elements`)
    return await Todo.find({})
        .then((elements) => {
            return reply.response(elements)
        })
        .catch((error) => {
            throw Boom.badRequest(`Cannor reat any data`);
        });
};

const get = async (request, reply) => {
    console.log('query: ', request.query);
    let id = request.query.id;
    console.log(`[+] Get element with id: ${id}`);
    return await Todo.findById(id).exec()
        .then((todo) => {
            if (!todo) reply.response(`Cannot get element with id: ${id}`).status(500);
            return reply.response(todo).status(200);
        })
        .catch((error) => {
            reply.response(error).status(500);
        })
};

const create = async (request, reply) => {
    console.log('[+] Create element');
    let title = validateTitle(request.query.title);
    let content = validateContent(request.query.content);
    let created_at = validateCreatedAt(request.query.created_at);
    let complete_before = validateCompleteBefore(request.query.complete_before);
    let obj = {
        title: title,
        content: content,
        created_at: created_at,
        complete_before: complete_before
    };
    return await Todo.create(obj)
        .then((todo) => {
            return reply.response(todo)
        })
        .catch((error) => {
            return reply.response(`Can not create object with title ${title}`).status(500);
        });
};

const update = async (request, reply) => {
    let id = request.query.id;
    console.log(`[+] Update element with id: ${id}`);
    return 'update';
};

const remove = async (request, reply) => {
    let id = request.query.id;
    console.log(`[+] Remove element with id: ${id}`);
    return 'remove';
};


module.exports = {
    list,
    get,
    create,
    update,
    remove
};