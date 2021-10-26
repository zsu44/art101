/**
 * Author:    Zhiheng Su <zsu44@ucsc.edu>
 * Created:   25.10.2021
 * License: Public Domain
 **/
//setting up the variable

//setting up the function sortUserName that take user's input name.
function sortUserName () {
  var userName = window.prompt("Hello. Please enter your name so I can help you fix it.")
  //print out the userName.
  console.log("userName =", userName);
  //split string to Array.
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the Array.
  var sortNameArray = nameArray.sort();
  console.log("sortNameArray =", sortNameArray);
  //join array back to string.
  var nameSorted = sortNameArray.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

//the Output
document.writeln("Hey, this is your new name: " ,sortUserName(), "</br>");
