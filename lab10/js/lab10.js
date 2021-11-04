/**
 * Author:    Zhiheng Su <zsu44@ucsc.edu>
 * Created:   3.11.2021
 * License: Public Domain
 **/
//first step sort the input name and return to the function.
function sortUserName () {
  var input = document.getElementById("username");
  var name = input.value;
  //print out the userName.
  console.log("userName =", name);
  //split string to Array.
  var nameArray = name.split('');
  console.log("nameArray =", nameArray);
  //sort the Array.
  var sortNameArray = nameArray.sort();
  console.log("sortNameArray =", sortNameArray);
  //join array back to string.
  var nameSorted = sortNameArray.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

function pushbutton(event){
  var name = document.getElementById("username");
  var inputname = name.value;

  var sortedname = sortUserName(inputname);

  var outputEl = document.getElementById("output");
  outputEl.innerHTML = "New Name " + sortedname;
  event.preventDefault();
}
document.getElementById('user-name').addEventListener("submit", pushbutton);
