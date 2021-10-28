/**
 * Author:    Zhiheng Su <zsu44@ucsc.edu>
 * Created:   27.10.2021
 * License: Public Domain
 **/

//set up the Functions
function isEven(x){
  return (x % 2 == 0);
}
//Test the function is working
console.log("Is 15 is even? ", isEven(15));
console.log("Is 26 is even? ", isEven(26));
//set up the array with numbers
array = [100,200,131,25000,287156,1991]
console.log("This is my array: ",array);
//set up a result variable that check the evenness of the Array
var result = array.map(isEven);
console.log("The evenness of my array: ", result);
//Square root of my array.
var mapResult = array.map(function(x){
  return x ** 0.5;
})
console.log("Squareroot of my array: ", mapResult);

var  outputEl = document.getElementById("output");
outputEl.innerHTML = "This is my array: " + array + "<br>" + "The evenness of my array: " + result + "<br>" + "Squareroot of my array: " + mapResult;
