$(document).ready(function() { // Starts jQuery
  
    $.ajax({
        url: 'https://randomuser.me/api/?results=12',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            console.log(data.results);
            console.log(data.results[0].name.first);
            
            $('#gallery').append("<div class='card'></div>");
            $('.card').append('<div class="card-img-container"></div>');
            $('.card-img-container').append('<img class="card-img" src="https://placehold.it/90x90" alt="profile picture"></div>');
            
            $.each(data.results, function(i) {
            console.log(data.results[i].name.first); // will alert each value
            });
        }
           
        
    }) 
}); // Ends jQuery

// https://randomuser.me/api/?results=12
//https://codepen.io/jaywolters/pen/GpZvLr