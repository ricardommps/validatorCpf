var express = require('express');
var router = express.Router();
var client = require("../controllers/ClientController");


// Get all client
router.get('/', function(req, res) {
    client.list(req, res);
});

// Get single client by id
router.get('/show/:id', function(req, res) {
    client.show(req, res);
});

// Save client
router.post('/save', function(req, res) {
    client.save(req, res);
});

// Edit update client
router.post('/update/:id', function(req, res) {
    client.update(req, res);
});

// Delete client
router.post('/delete/:id', function(req, res, next) {
    client.delete(req, res);
});

// Find client by Cpf/Cnpj
router.get('/findCnfCnpj/:cpfCnpj', function(req, res) {
    client.findCnfCnpj(req, res);
});

module.exports = router;
