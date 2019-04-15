
const chai = require('chai');
const app = require('../app');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const Client = require("../models/Client")
chai.use(chaiHttp);

let item = ""
//Our parent block
describe('Client', () => {
  Client.collection.drop();
  beforeEach((done) => { //Before each test we empty the database
    var newData = new Client({
      "firstName": "Teste",
      "lastName": "Chai",
      "email": "teste@teste.com",
      "cpfCnpj": "28234125060",
      "address": " Rua xxx",
      "phone": "222222222"

    });
    newData.save(function (err) {
      done();
    });
    afterEach(function (done) {
      //Client.collection.drop();
      done();
    });
  });


  it('Check Status - GET', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        done();
      });
  });

  it('Create Client use CPF- Post', (done) => {
    chai.request(app)
      .post('/clients/save')
      .send({
        "firstName": "New Teste ",
        "lastName": "Teste",
        "email": "tnew@teste.com",
        "cpfCnpj": "03359783042",
        "address": " Rua xxx",
        "phone": "222222222"
      })
      .end(function (err, res) {
        expect(res).to.have.status(200);
        item = res.body;
        done();
    })
  });

  it('Create Client use CNPJ- Post', (done) => {
    chai.request(app)
      .post('/clients/save')
      .send({
        "firstName": "New Teste ",
        "lastName": "Teste",
        "email": "tnew@teste.com",
        "cpfCnpj": "12205386000157",
        "address": " Rua xxx",
        "phone": "222222222"
      })
      .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
    })
  });

  it('Create Client not unique cpfCnpj  - Post', (done) => {
    chai.request(app)
      .post('/clients/save')
      .send({
        "firstName": "New Teste ",
        "lastName": "Teste",
        "email": "tnew@teste.com",
        "cpfCnpj": "03359783042",
        "address": " Rua xxx",
        "phone": "222222222"
      })
      .end(function (err, res) {
        expect(res).to.have.status(400);
        done();
    })
  });

  it('Create Client not cpf validate  - Post', (done) => {
    chai.request(app)
      .post('/clients/save')
      .send({
        "firstName": "New Teste ",
        "lastName": "Teste",
        "email": "tnew@teste.com",
        "cpfCnpj": "89839266000",
        "address": " Rua xxx",
        "phone": "222222222"
      })
      .end(function (err, res) {
        expect(res).to.have.status(400);
        done();
    })
  });

  it('Create Client not cnpj validate  - Post', (done) => {
    chai.request(app)
      .post('/clients/save')
      .send({
        "firstName": "New Teste ",
        "lastName": "Teste",
        "email": "tnew@teste.com",
        "cpfCnpj": "164836550001",
        "address": " Rua xxx",
        "phone": "222222222"
      })
      .end(function (err, res) {
        expect(res).to.have.status(400);
        done();
    })
  });

  it('List all Clients - GET', (done) => {
    chai.request(app)
      .get('/clients')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('List Client by id - GET', (done) => {
    chai.request(app)
      .get(`/clients/show/${item.id}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Update Client by ID  - POST', (done) => {
    chai.request(app)
      .post(`/clients/update/${item.id}`)
      .send({
        "firstName": "Update New Teste ",
        "lastName": "Teste Update",
        "email": "udpdate@teste.com",
        "cpfCnpj": "164836550001",
        "address": " Rua xxx",
        "phone": "222222222"
      })
      .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
    })
  });

  it('Delete Client by ID  - POST', (done) => {
    chai.request(app)
      .post(`/clients/update/${item.id}`)
      .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
    })
  });
});