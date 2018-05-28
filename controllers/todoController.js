const bodyParser = require('body-parser');

var data = [{item: 'Get Milk'}, {item: 'Wash the car'}, {item: 'Meet at 6pm for dinner'}, {item: 'Finish this app'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

  app.get('/todo', function(req, res){
    res.render('todo', {todos: data});
  });

  app.post('/todo', urlencodedParser, function(req, res){
    data.push(req.body);
    res.json({todos: data});
  });

  app.delete('/todo/:item', function(req, res){
    data = data.filter(function(todo){
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json({todos: data});
  });

};