//Event Listener for all button elements
    $(document).ready(function(){ 
      
    var sportsArr = ["Figure Skating", "Hockey", "Swimming", "Volleyball", "Skateboarding", "Snowboarding", "Basketball", "BMX", "Rock Climbing"];
    
  //add buttons for original movies array
  function renderButtons(){
      $('#sports-buttons').empty();
        for (i=0; i < sportsArr; i++){
          $("#sports-buttons").append("<button class='btn btn-success' data-sports='" + sportsArr[i] + "'>" + sportsArr[i] + "</button>");
		}
  }
  
  renderButtons();
  
  //Adding a button for movie entered

  $("add-sports").on("click", function(){
        event.preventDefault();
        var sport = $('#sport-input').val().trim(); 
        sportsArr.push(movie);
        renderButtons();
        return;

  });

  //Getting figs from api....onto HTML

  $("button").on("click", function(){
    var sport = $(this).attr("data-sports");


//URL to search Giphy for the sport button clicked
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        sport + "&api_key=dc6zaTOxFJmzC&limit=10";

//AJAX Get request
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  
  console.log(response);

//Storing an array of results in the sportsArr
var results = response.data;

$("sports").empty();

//loop over the sports results
for (var i=0; i< results.length; i++){

    //Only using if the photo has an appropriate rating
    if (results[i].rating !=="r" && results[i].rating !=="pg 13"){

      //if rating in acceptable then create div for the gif
      var gifDiv = $('<div>');
      
      //storing results of items rating
      var rating = results[i].rating;

      //create a paragraph tag with the result item's rating
      var p = $('<p>').text("Rating:" + rating);

      //create an imag tag
      var sportsImage = $('<img>');

      //add src attribute of property pull from the sportsArr item and data states
      sportsImage.attr("src", results[i].images.original_still.url);
      sportsImage.attr("data-still", response.data[i].images.original_still.url);
      sportsImage.attr("data-animate", response.data[i].images.original.url)
      sportsImage.attr("data-state", "still");
      sportsImage.attr("class", "gif");

      //Appending the P tag and sportsArr we created to teh gifDiv
      gifDiv.append(p);
      gifDiv.append(sportsImage);

      //prepending the gifDiv to the '#gifs-appear-here" div in the HTML
      $('#gifs-appear-here').prepend(gifDiv);

        }
      }

    });
});





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

// $("#submitPress").on("click", function(){

//   var input = $('#user-input').val().trim();
//   form.reset();
//   displayedButtons();
//   return false;
// })

// //renderButtons();

// $(document).on("click", "#input", displayImg);
$(document).on("click", ".gif", imageChangeState);











});


// function displayImage (){
    
//     $('#gifs-appear-here').empty();
    
    
//     var limit = 10;
      
    
      
// }
// })
  
    //         for(var k=0; k < limit; k++){ 

                
                
            
    //             var displayDiv = $('<div>');
    //             displayDiv.addClass("display");
                

    //             var imageUrl = response.data[k].images.original_still.url;
    //             var imageUrlStill = response.data[k].images.original_still;
    //             var imageUrlAnimate = response.data[k].images.original.url;

    //             var sportsImage = $('<img>');
    //             //$("img").css({"height": "200px", "width": "300px"});

    //             sportsImage.attr("src", imageUrl);
    //             sportsImage.attr("data-still",imageUrlStill);
    //             sportsImage.attr("data-animate",imageUrlAnimate)
    //             sportsImage.attr("data-state", "still");
    //             sportsImage.attr("class", "gif");
    //             displayDiv.prepend(sportsImage);

               
                
    //             var rating = response.data[k].rating;
    //             console.log(response);
    //             var p = $('<p>').text("Rating: " + rating);
                
                
    //             displayDiv.prepend(p);

    //             $("#gifs-appear-here").prepend(displayDiv);

                
    //         }
    
    //     });
    // }

// function renderButtons(){
//     $('#buttons').empty();

//     for (var i =0; i<sportsArr.length; i++){

//         var newButton = $('<button>')
//         newButton.attr("type", "button");
//         newButton.attr("class", "btn btn-primary");
//         newButton.attr('id', "sport")
//         newButton.attr("data-sport", sportsArr[i]);
//         newButton.text(sportsArr[i]);
//         $('#buttons').append(newButton);



//     }
// }
// function sportsImageChangeState(){
//     var state = $(this).attr("data-state");
//     var animateImage = $('this').attr("data-animate");
//     var stillImage = $(this).attr('data-still');

//     if (state === "still"){
//         $(this).attr("src", animateImage);
//         $(this).attr("data-state", "animate");
//     }

//     else if (state === "animate"){
//         $(this).attr("src", stillImage);
//         $(this).attr("data-state", "still");
// }
// }
 
  
// $("#submitPress").on("click", function(){

//     var input = $("#user-input").val().trim();
//     form.reset();
//     sportsArr.push(input);
            
//     renderButtons();

//     return false;
// })
//        renderButtons();

//     $(document).on('click', "#input", displayImage);
//     $(document).on('click', "gif", sportsImageChangeState);
     
    









   
    
    
    
    
    
    
