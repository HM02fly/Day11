// Create an array here
var myArr = [2, 4, 0, 8, 10];
// End of creating an array
function myArrayFunction(arr) {
  var myItems = [...arr];
  // Only chnage code below this line
  arr = myItems[2] = 6;
  return myItems;
  // Only chnage code above this line
}
console.log(myArrayFunction(myArr)); // Change this line
module.exports = myArrayFunction;
