var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');

var should = chai.should();
var app = server.app;
var storage = server.storage;

chai.use(chaiHttp);

describe('Shopping List', function() {
    it('should list items on get', function(done) {
        chai.request(app)
            .get('/items')
            .end(function(err, res) {
              should.equal(err, null);
              res.should.have.status(200);
              res.should.be.json;
              res.body.should.be.a('array');
              res.body.should.have.length(3);
              res.body[0].should.be.a('object');
              res.body[0].should.have.property('id');
              res.body[0].should.have.property('name');
              res.body[0].id.should.be.a('number');
              res.body[0].name.should.be.a('string');
              res.body[0].name.should.equal('Broad beans');
              res.body[1].name.should.equal('Tomatoes');
              res.body[2].name.should.equal('Peppers');
              done();
            });
    });
    it('should add an item on post');
    it('should edit an item on put');
    it('should delete an item on delete');
    it('should POST to an ID that doesn\'t exist');
    it('should POST without body data');
    it('should POST with something other than valid JSON');
    it('should PUT without an ID in the endpoint');
    it('should PUT with different ID in the endpoint than the body');
    it('should PUT to an ID that doesn\'t exist');
    it('should PUT without body data');
    it('should PUT with something other than valid JSON');
    it('should DELETE an ID that doesn\'t exist');
    it('should DELETE without an ID in the endpoint');
});
