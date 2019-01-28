
//Getting GIFS from api....onto HTML
function displaySportsInfo(){ 

  //$("button").on("click", function(){
var sport = $(this).attr("data-name");

//URL to search Giphy for the sport button clicked
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        sport + "&api_key=dc6zaTOxFJmzC&limit=10";

//AJAX Get request
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  
console.log(response);

//creating a div to hold the sport
var gifDiv = $("<div class='sport'>");
//Storing an array of results in the sportsArr
var results = response.data;



//loop over the sports results
for (var i=0; i< results.length; i++){

    //Only using if the photo has an appropriate rating
    if (results[i].rating !=="r" && results[i].rating !=="pg 13"){

      //if rating in acceptable then create div for the gif
      var gifDiv = $('<div>');
      
      //storing results of items rating
      var rating = results[i].rating;

      //create a paragraph tag with the result item's rating
      var p = $('<p>').text("Rating: " + rating);
      
      //add attributes to p tag

      p.attr("class","text-center font-weight-bold text-info");
      

      //create an imag tag
      var sportsImage = $('<img>');

      //add src attribute of property pull from the sportsArr item and data states
      sportsImage.attr("src", results[i].images.original_still.url);
      sportsImage.attr("data-still", response.data[i].images.original_still.url);
      sportsImage.attr("data-animate", response.data[i].images.original.url)
      sportsImage.attr("data-state", "still");
      sportsImage.attr("class", "gif rounded mx-auto d-block border border-dark");
      

      // create a p tag with link to download gif
      var download = $('<a>');
      download.attr('href', response.data[i].images.original.url);
      download.text("Download");

      //Appending the P tag and sportsArr we created to teh gifDiv
      
      gifDiv.attr("class","col-6");
      gifDiv.append(sportsImage);
      gifDiv.append(p);
      gifDiv.append(download);



      //prepending the gifDiv to the '#sports-view" div in the HTML
      $('#sports-view').prepend(gifDiv);

        }
      }

    });
  }



 

function imageChangeState(){
    var state = $(this).attr("data-state");
    var animateImage = $(this).attr("data-animate");
    var stillImage = $(this).attr("data-still");

    if(state === "still"){ 
      $(this).attr("src", animateImage);
      $(this).attr("data-state", "animate");
    }

    else if (state === "animate"){

      $(this).attr("src", stillImage);
      $(this).attr("data-state", "still");
    }
}

$(document).ready(function () {


var sportsArr = ["Figure Skating", "Hockey", "Swimming", "Volleyball", "Skateboarding", "Snowboarding", "Basketball", "BMX", "Rock Climbing"];
renderButtons();

//add buttons for original sportsArr array
function renderButtons(){
  $('#buttons-view').empty();
    for (var i = 0; i < sportsArr.length; i++){
      var a = $("<button>");
      a.addClass("btn btn-outline-info");
      a.attr("data-name", sportsArr[i]);
      a.text(sportsArr[i]);
      $('#buttons-view').append(a);
      }
}



//Adding a button for sport entered

$("#add-sport").on("click", function(event){
    event.preventDefault();
    var sport = $('#sport-input').val().trim(); 
    sportsArr.push(sport);
    renderButtons();
   

});

$('#buttons-view').on("click", 'button', displaySportsInfo);
$(document).on("click", ".gif", imageChangeState);

})




