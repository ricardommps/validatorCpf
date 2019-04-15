const Client = require("../models/Client");
const CPF = require("cpf_cnpj").CPF;
const CNPJ = require("cpf_cnpj").CNPJ;

let clientController = {};

// Show list of clients
clientController.list = function(req, res) {
    Client.find({}).exec(function (err, client) {
        if (err) {
            res.status(400).send({'error': err.code})
        }
        if (client === undefined || client.length === 0) {
            res.status(400).send({'error':'No itens in database'})
        } else {
            res.status(200).send(client)
        }
  });
};

// Show client by id
clientController.show = function(req, res) {
    Client.findOne({_id: req.params.id}).exec(function (err, client) {
        if (err) {
            res.status(400).send({'error': err.code})
        }
        if (client === undefined || client.length === 0) {
            res.status(400).send({'error':'No itens in database'})
        } else {
            res.status(200).send(client)
        }
  });
};

// Save new client
clientController.save = function(req, res) {
    var client = new Client(req.body);
    if((CPF.isValid(client.cpfCnpj) || (CNPJ.isValid(client.cpfCnpj)))){
        client.save(function(err) {
            console.log(">>>ERR",err)
            if (err) {
                res.status(422).send({'error': err.errors.cpfCnpj.message})
            }
            else {
                res.status(200).send({id:client.id})
            }
        });
    }else{
        res.status(422).send({'error': "Cpf/Cnpj invalido"})
    }

    
};

// Update an client
clientController.update = function(req, res) {
    Client.findByIdAndUpdate(req.params.id, { $set: req.body}, { new: true }, function (err, client) {
        if (err) {
            res.status(400).send({'error': err.code})
        }
        if (client === undefined || client.length === 0) {
            res.status(400).send({'error':'No itens in database'})
        } else {
            res.status(200).send(client)
        }
  });
};

// Delete an client
clientController.delete = function(req, res) {
    Client.remove({_id: req.params.id}, function(err) {
        if (err) {
            res.status(400).send({'error': er.code})
        }
        else {
            res.status(200).send(req.params.id)
        }
  });
};


//Find Client by Cpf/Cnpj
clientController.findCnfCnpj = function(req, res){
    Client.findOne({cpfCnpj: req.params.cpfCnpj}).exec(function (err, client) {
        if (err) {
            res.status(400).send({'error': err.code})
        }
        res.status(200).send(client)
    });
}

module.exports = clientController;
