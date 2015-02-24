

exports.database = function(){
  // var events = require('events');
  // var emitter = new events.EventEmitter();
  var db = {};
  var storage = {};

  var id = 0;

  db.get = function(key, done){
    var result;
    if(!storage[key]){
      result = [];
    } else {
      result = storage[key];    
    }
    //emitter.emit('fetch', result);
    done(result);
  };

  db.set = function(key, value, done){
    value.id = id++;
    if(!storage[key]){
      storage[key] = [value];
    } else {
      storage[key].push(value);
    }
    //emitter.emit('set', 1);
    done(1);
  };

  return db;
}();