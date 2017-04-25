'use strict';


var fs = require('fs');

var hasToString = function (x) {
  return x && typeof x.toString === 'function';
};


var bufferToString = function (buffer) {
  return hasToString(buffer) && buffer.toString();
};


console.log('<<<<<<<<<<<<<');



function validateMsg(msg) {
  console.log('>>>>>>>>', msg);
  return false;
};

var commitMsgFileOrText = '.git/COMMIT_EDITMSG';
fs.readFile(commitMsgFileOrText, function readFile(err, buffer) {
  if(err && err.code !== 'ENOENT') {
    throw err;
  }

  var isFile = !err;
  var msg = (
    isFile
    ? bufferToString(buffer)
    : commitMsgFileOrText
  );

  validateMsg(msg, isFile);
});



console.log('<<<<<<<<<<<<<');
