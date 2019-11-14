const express = require("express");

const Users = require('../api/models/user-model');

const server = express();

server.use(express.json());

server.post('/', (req, res) => {
    Users
        .insert(req.body)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

server.delete('/:id', (req, res) => {
    Users
        .remove(req.params)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});



module.exports = server;
