var events = require('events');
var EventsEmitter = events.EventEmitter;
var _ = require('underscore');
var backupTest = require('.././stream.js').streamBackup;

var Database = function(){
  var db = {}
  _.extend(db, EventsEmitter.prototype);

  var storage = {};
  var objectId = 0;

  db.get = function(key, done){
    var result = [];
    if(storage[key]){
      result = storage[key];    
    }
    //db.emit('fetch', result);
    done(result);
  };

  db.set = function(key, value, done){
    value.objectId = objectId++;
    if(!storage[key]){
      storage[key] = [value];
    } else {
      storage[key].push(value);
    }
    //db.emit('set', []);
    done([]);
  };

  db.backup = function(){
    backupTest(storage);
  };

  return db;
};

exports.database = Database();
