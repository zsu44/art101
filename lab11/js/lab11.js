/**
 * Author:    Zhiheng Su <zsu44@ucsc.edu>
 * Created:   8.11.2021
 * License: Public Domain
 **/
//adding button to each sections
$("#challenge").append("<button id='1-button'>Button</button>");

$("#problems").append("<button id='2-button'>Button</button>");

$("#result").append("<button id='3-button'>Button</button>");

//adding click event into each button1
$("#1-button").click(function(){
  $(this).parent().toggleClass("special");
})

$("#2-button").click(function(){
  $(this).parent().toggleClass("special");
})

$("#3-button").click(function(){
  $(this).parent().toggleClass("special");
})
