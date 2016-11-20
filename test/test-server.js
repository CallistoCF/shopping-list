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
                res.should.have.status(200);
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
