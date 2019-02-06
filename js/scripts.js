$(document).ready(function() { // Starts jQuery
  
    $.ajax({
        url: 'https://randomuser.me/api/?results=12',
        dataType: 'json',
        success: function (data) {
            var user = data.results[0].user;
            console.log(data.results);
            $('#gallery').append('<div class="card"></div>');
            $('.card').append('<div class="card-img-container"></div>');
            $('.card-img-container').append('<img class="card-img" src="https://placehold.it/90x90" alt="profile picture"></div>');
            
            $.each( data, function(key, value  ) {
                // Assign Data
                // Image
                console.log(email.email)
                // var image = '<img src=' + user.picture + '>';
                // $(".card-img-container'").append(image);
                // $("#userP").append(image);
                // First and Last Name
                // var name = = '<p> + (user.name.first) +  </p>' '>';

                // Email
                // City or location

                
                // $('#user_value').html(user.name.first + ' ' + user.name.last);
        
                // $('li[data-label="location"]').attr('data-value', user.location.street);
                //$('#gallery').html(image);
                })
        }
    }) 
}); // Ends jQuery

// https://randomuser.me/api/?results=12
