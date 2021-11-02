/**
 * Author:    Zhiheng Su <zsu44@ucsc.edu>
 * Created:   1.11.2021
 * License: Public Domain
 **/
//first step
var outputEl = document.getElementById("output");
console.log("outputEl: ", outputEl);
//making the new1El
var new1El = document.createElement("p");
//assign
new1El.innerHTML = "Something new is here! ";
new1El.id = "new-thing";
// creating the new2El
var new2El = document.createElement("p");
new1El.id = "new-two";
//change the innerHTML
new2El.innerHTML = "More new things here.";
//append both new element
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
//change the css file
new1El.style.color = "red";
outputEl.style.border = "dashed 2px blue";
outputEl.className = "change";
