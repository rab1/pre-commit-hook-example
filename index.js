// example file to test code style and lint
var b = 5;

// add function
function addOn (v){
  return function (f) {
    return b + v + f;
  };
}

var addTenAndFive = addOn(10);
console.log(addTenAndFive(10));