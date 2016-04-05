'use strict';
var q = require('q');

// function* numberGenerator(){
//   console.log('Started');
//   var index = 0;
//   while (true){
//     console.log('Before add');
//     yield index++;
//     console.log('After add');
//   }
// }

// var gen = numberGenerator();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

function work(){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('Finished!');
    },2000);
  })
}

// function* asyncWork(){
//   var res = yield work();
//   console.log(res);
// }

q.spawn(function*(){
  let result = yield work();
  console.log(result)
  console.log('outro')
})
