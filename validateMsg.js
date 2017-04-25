'use strict';


var fs = require('fs');

var hasToString = function (x) {
  return x && typeof x.toString === 'function';
};


var bufferToString = function (buffer) {
  return hasToString(buffer) && buffer.toString();
};


var validate = function (msg, isFile) {
  if (!validateMessage(msg)) {
    var incorrectLogFile = (
      isFile
      ? commitMsgFileOrText.replace('COMMIT_EDITMSG', 'logs/incorrect-commit-msgs')
      : (getGitFolder() + '/logs/incorrect-commit-msgs')
    );

    fs.appendFile(incorrectLogFile, msg + '\n', function appendFile() {
      process.exit(1);
    });
  } else {
    process.exit(0);
  }
};


console.log('<<<<<<<<<<<<<');



function validateMsg(raw) {
  var messageWithBody = (raw || '').split('\n').filter(function(str) {
    return str.indexOf('#') !== 0;
  }).join('\n');

  var message = messageWithBody.split('\n').shift();

  if (message === '') {
    console.log('Aborting commit due to empty commit message.');
    return false;
  }

  console.log('>>>>>>>>', message);

  return true;
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
