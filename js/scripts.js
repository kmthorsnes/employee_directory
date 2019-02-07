$(document).ready(function() { // Starts jQuery
  
    $.ajax({
        url: 'https://randomuser.me/api/?results=12',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            console.log(data.results);
            console.log(data.results[0].name.first);
            
            // $('#gallery').append("<div class='card'></div>");
            // $('.card').append('<div class="card-img-container"></div>');
            // $('.card-info-container').append('<img class="card-img"</div>');
            // $('.card-img-container').append('<img class="card-img" src="https://placehold.it/90x90" alt="profile picture"></div>');
            // $('.card').append('<div class="card-info-container"></div>');
            // $('.card-info-container').append('<h3 id="name" class="card-name cap">first last</h3>');
            // $('.card-info-container').append('<p class="card-text">email</p>');
            // $('.card-info-container').append('<p class="card-text cap">city, state</p>');
            
            
        


            
            $.each(data.results, function(i) {
            console.log(data.results[i].name.first)
            let firstName = data.results[i].name.first;
            let lastName = data.results[i].name.last;
            let email = data.results[i].email;
            let mediumPhoto = data.results[i].picture.medium;
            $('#gallery').append("<div class='card"+i+"'></div>");
            $('.card'+i).append('<div class="card-img-container'+i+'"></div>');
            //$('.card"+i+"').append('<div class="card-info-container'+i+'"></div>');
            //$('.card-img-container').append('<img class="card-img" src='+ mediumPhoto + ' alt="profile picture"></div>');    
           // $('.card-info-container').append('<h3 id="name" class="card-name cap">'+ firstName +" " + lastName +'</h3>');
          // $('.card-info-container'+i+'').append('<p class="card-text'+i+'">'+email+'</p>');    
        });
        }
           
        
    }) 
}); // Ends jQuery

// https://randomuser.me/api/?results=12
//https://codepen.io/jaywolters/pen/GpZvLr