/**
 * Author:    Zhiheng Su <zsu44@ucsc.edu>
 * Created:   29.11.2021
 * License: Public Domain
 **/


var myUrl = "http://numbersapi.com/39/math";
//click buttom functions
$("#activate").click(pickAPI);

function pickAPI(){
  console.log("click");
  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request (from the api docs)
      url: myUrl,
      // Whether this is a POST or GET request
      type: "GET",
      // What do we do when the api call is successful
      //   all the action goes in here
  })
  .done(function(data) {
    console.log("Success:", data);
    //$("#output").html(JSON.stringify(data));
    // var imgUrl = "https://cataas.com" + data.url;
    // var imgTag = "<img src=" + imgUrl + ">";
    $("#output").html(JSON.stringify(data));
})
// If the request fails
.fail(function(request,error) {
    console.log(request, error);
    $("#output").html("Error");
})
}
