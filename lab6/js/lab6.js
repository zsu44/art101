/**
 * Author:    Zhiheng Su <zsu44@ucsc.edu>
 * Created:   20.10.2021
 * License: Public Domain
 **/
//setting up the variable
var myTransport = ["Bus", "Car","Bike."];
var myMainRide = {
  make : "Toyota",
  model : "Sienna",
  color : "Grey",
  year : "2005",
  age : function() {
    return 2021 - age;
  }
};
//Print them output
document.writeln("Transportation I usually use: " + myTransport + "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
