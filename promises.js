function work(){
  return new Promise(function(resolve, reject){
   setTimeout(function(){
      resolve();
      console.log('Resolved');
    }, 2000);
  })
}

function work2(){
  return new Promise(function(resolve, reject){
   setTimeout(function(){
      resolve();
      console.log('Resolved');
    }, 1000);
  })
}
function work3(){
  return new Promise(function(resolve, reject){
   setTimeout(function(){
      resolve();
      console.log('Resolved');
    }, 1000);
  })
}

// Chaining
// work().then(work2).then(work3).then(function(){
//   console.log('finished all')
// });

var workers = [];
workers.push(work());
workers.push(work2());
workers.push(work3());

Promise.all(workers).then(function(){
  console.log('Using \'all\' has just finished!');
});
