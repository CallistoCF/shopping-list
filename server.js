var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
//add method for Storage

var Storage = {
  add: function(name) {
    var item = {name: name, id: this.setId};
    this.items.push(item);
    this.setId += 1;
    return item;
  },
  delete: function(setId) {
    this.items.pop(setId);
    return storage;
  },
  put: function(name, setId) {
    var item = {name: name, id: setId};
    this.items.splice(setId, 0, item);
    return storage;
  }
};

//Create Storage, factory made
var createStorage = function() {
  var storage = Object.create(Storage);
  storage.items = [];
  storage.setId = 1;
  return storage;
};

//add edit and remove functions for storage
var storage = createStorage();

storage.add('Broad beans');
storage.add('Tomatoes');
storage.add('Peppers');

var app = express();
app.use(express.static('public'));

app.get('/items', function(request, response) {
    response.json(storage.items);
});

app.post('/items', jsonParser, function(request, response) {
  if (!('name' in request.body)) {
    return response.sendStatus(400);
  }
  console.log(request.body.name + " has been added!");
  var item = storage.add(request.body.name);
  response.status(201).json(item);
});

app.delete('/items/:id', jsonParser, function(request, response) {
  if (!('id' in request.body)) {
    console.log("Incorrect delete request!");
    return response.sendStatus(404);
  }
  var item = storage.delete(request.body.id);
  response.status(201).json(item);
  console.log(request.body.id + " has been deleted!");
});

app.put('/items/:id', jsonParser, function(request, response) {
  if(!('name' in request.body)) {
    console.log("Incorrect put request, no name!");
    return response.sendStatus(404);
  }
  if(!('id' in request.body)) {
    console.log("No id supplied in put request, adding item!");
    var item = storage.add(request.body.name);
    response.status(201).json(item);
  }
  else {
    console.log("Attempting to put " + request.body.name + " " + request.body.id);
    var iitem = storage.put(request.body.name, request.body.id);
    response.status(201).json(iitem);
  }
});
app.listen(process.env.PORT || 8080, process.env.IP);
