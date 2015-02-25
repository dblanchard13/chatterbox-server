var fs = require('fs');
var stream = require('stream');

var streamBackup = function(data){
  data = JSON.stringify(data);
  console.log(data);
  fs.writeFile('./write.text', data, function(err) {
    if(err) throw err;
    console.log('File write completed');
  });  
};

exports.streamBackup = streamBackup;
