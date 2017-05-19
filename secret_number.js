'use strict';
module.exports = function() {

  var secretNumber = Math.floor((Math.random() * 1000000) + 1);

  return function(){
    return secretNumber;
  };

  // function random(){
  //   return secretNumber;
  // }
  // return random;

};