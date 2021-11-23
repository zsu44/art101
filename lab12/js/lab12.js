/**
 * Author:    Zhiheng Su <zsu44@ucsc.edu>
 * Created:   15.11.2021
 * License: Public Domain
 **/

//creat the function  sortingHat()
function sortingHat(str){
  len = str.length;
  mod = len % 4;
  if (mod == 0){
    return("Gryffindor");
  }
  else if (mod == 1){
    return("Ravenclaw");
  }
  else if (mod == 2){
    return("Slytherin");
  }
  else if (mod == 3){
    return("Hufflepuff");
  }
}

//creating the button listener
var myButton = document.getElementById("button");
myButton.addEventListener("click",function(){
//creating varialbe name and house that assign the value of input into it.
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})
