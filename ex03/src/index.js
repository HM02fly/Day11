var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets) {
  var myNewPets = [...myPets];

  for (var i of ["Bird", "Fish"]) {
    myNewPets.push(i);
  }
  //   myNewPets.push("Bird", "Fish");
  var firstPet = myNewPets.shift();
  var lastPet = myNewPets.pop();
  myNewPets.unshift("Lion");
  return myNewPets;
}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;
