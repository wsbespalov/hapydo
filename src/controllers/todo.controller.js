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
    return 'list';
};

const get = async (request, reply) => {
    let id = request.params.id;
    if (ALLOW_CONSOLE) console.log(`[+] Get element with id: ${id}`);
    return 'get';
};

const create = async (request, reply) => {
    console.log('[+] Create element');
    let title = validateTitle(request.params.title);
    let content = validateContent(request.params.content);
    let created_at = validateCreatedAt(request.params.created_at);
    let complete_before = validateCompleteBefore(request.params.complete_before);
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
            throw Boom.badRequest(`Cannot create obkect with title ${title}`);
        });
};

const update = async (request, reply) => {
    let id = request.params.id;
    console.log(`[+] Update element with id: ${id}`);
    return 'update';
};

const remove = async (request, reply) => {
    let id = request.params.id;
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