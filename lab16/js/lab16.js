/**
 * Author:    Zhiheng Su <zsu44@ucsc.edu>
 * Created:   01.12.2021
 * License: Public Domain
 **/

 var myUrl = "https://xkcd.com/info.0.json";
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
       dataType:"JSON",
   })
   .done(function(data) {
     console.log("Success:", data);
     //$("#output").html(JSON.stringify(data));
     var comicObj = "https://xkcd.com/json.html" + data.url;
     var comicImg = data.img;
     var comicTitle = data.safe_title;
     $("#title").html(comicTitle);
     var imgTag = "<img src=" + comicImg + ">";
     $("#output").html(imgTag);
     var comicAlt = data.alt;
     $("#alt").html(comicAlt);
 })
 // If the request fails
 .fail(function(request,error) {
     console.log(request, error);
     $("#output").html("Error");
 })
 }
