/**
 * Author:    Zhiheng Su <zsu44@ucsc.edu>
 * Created:   22.11.2021
 * License: Public Domain
 **/
// outputEl = document.getElementById("output");

 function fizzBuzz(){
   for (var i = 0; i<=200; i++){
     var oneLongString = "";
     if (i % 3 == 0){
       oneLongString += i + " Fizz!<br>";
       $("#output").html(oneLongString);
     }
     if (i % 5 == 0){
       oneLongString += i + "Buzz!<br>";
       $("#output").html(oneLongString);
     }
     if (i % 7 == 0){
       oneLongString += i + "Boom!<br>";
       $("#output").html(oneLongString);
     }
     if (str == ""){
       str = i;
     }
     else{
       str += "!";
     }
     // console.log(str);
   }
   document.getElementById("output").innerText=str;
 }
console.log(fizzBuzz);

 // function outputToPage(str) {
 //     newEl = document.createElement("p");
 //     newEl.innerHTML = str;
 //     outputEl.appendChild(newEl);
 // }
