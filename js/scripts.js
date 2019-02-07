$(document).ready(function() { // Starts jQuery
 
    //helper methods 
    
    function createModal (e) {

        $('#gallery').append('<div class="modal-container"></div>');
        $('.modal-container').append('<div class="card-img-container"></div>');
        $('.card-img-container').append('<img class="card-img" src="https://placehold.it/90x90" alt="profile picture"></img>');


    }

    //funksjon for å lage modalvindu

    // clickhørere. 

    
    
    
    
    //end helper methods






    $.ajax({
        url: 'https://randomuser.me/api/?results=12',
        dataType: 'json',
        success: function (data) {
            
            $.each(data.results, function(i) {
            console.log(data.results[i].name.first)
            let firstName = data.results[i].name.first;
            let lastName = data.results[i].name.last;
            let email = data.results[i].email;
            let mediumPhoto = data.results[i].picture.medium;
            let city = data.results[i].location.city.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
            let state = data.results[i].location.state.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
            $('#gallery').append("<div class='card"+i+"'></div>");
            $('.card'+(i)).append('<div class="card-img-container'+i+'"></div>');
            $('.card'+(i)).append('<div class="card-info-container'+i+'"></div>');
            $('.card-img-container'+(i)).append('<img class="card-img" src='+ mediumPhoto + ' alt="profile picture"></div>');    
            $('.card-info-container'+(i)).append('<h3 id="name" class="card-name cap">'+ firstName +" " + lastName +'</h3>');
            $('.card-info-container'+(i)).append('<p class="card-text'+i+'"><a href="mailto:'+email+'?Subject=Hello%20again" target="_top" style="text-decoration:none">'+email+'</a></p>');    
            $('.card-info-container'+(i)).append('<p class="card-text cap'+i+'">'+city+ ", "+ state + '</p>');    
            $('.card'+(i)).removeClass( "'.card'+(i)" ).addClass( "card" );
            $('.card-img-container'+(i)).removeClass('.card-img-container'+(i)).addClass('.card-img-container');
            $('.card-info-container'+(i)).removeClass('.card-info-container'+(i)).addClass('.card-info-container');
        });
        }
           



        
    }) 
}); // Ends jQuery

// https://randomuser.me/api/?results=12
//https://codepen.io/jaywolters/pen/GpZvLr