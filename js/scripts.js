$(document).ready(function() {
  // Starts jQuery

  //helper methods

  //   function createModal(e) {
  //     $("#gallery").append('<div class="modal-container"></div>');
  //     $(".modal-container").append('<div class="card-img-container"></div>');
  //     $(".card-img-container").append(
  //       '<img class="card-img" src="https://placehold.it/90x90" alt="profile picture"></img>'
  //     );
  //   }

  //funksjon for å lage modalvindu

  // clickhørere.
  numberArray = [];
  numbersOfUsers = 30;
  //end helper methods

  $.ajax({
    url: "https://randomuser.me/api/?results="+numbersOfUsers,
    dataType: "json",
    success: function(data) {
      $.each(data.results, function(i) {
        numberArray.push(i);        
        let firstName = data.results[i].name.first;
        let lastName = data.results[i].name.last;
        let email = data.results[i].email;
        let mediumPhoto = data.results[i].picture.medium;
        let city = data.results[i].location.city
          .toLowerCase()
          .split(" ")
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(" ");
        let state = data.results[i].location.state
          .toLowerCase()
          .split(" ")
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(" ");
        $("#gallery").append("<div class='card" + i + "'></div>");
        $(".card" + i).append(
          '<div class="card-img-container' + i + '"></div>'
        );
        $(".card" + i).append(
          '<div class="card-info-container' + i + '"></div>'
        );
        $(".card-img-container" + i).append(
          '<img class="card-img" src=' +
            mediumPhoto +
            ' alt="profile picture"></div>'
        );
        $(".card-info-container" + i).append(
          '<h3 id="name" class="card-name cap">' +
            firstName +
            " " +
            lastName +
            "</h3>"
        );
        $(".card-info-container" + i).append(
          '<p class="card-text' +
            i +
            '"><a href="mailto:' +
            email +
            '?Subject=Hello%20again" target="_top" style="text-decoration:none">' +
            email +
            "</a></p>"
        );
        $(".card-info-container" + i).append(
          '<p class="card-text cap' + i + '">' + city + ", " + state + "</p>"
        );
        $(".card" + i)
          .removeClass("'.card'+(i)")
          .addClass("card");
        $(".card-img-container" + i)
          .removeClass(".card-img-container" + i)
          .addClass(".card-img-container");
        $(".card-info-container" + i)
          .removeClass(".card-info-container" + i)
          .addClass(".card-info-container");
      });

      console.log(data.results);
      console.log(numberArray);

      //  Creating modal

      function showPerson(e) {
        $("#gallery").append(
          '<div class="modal-container">' +
            '<div class="modal">' +
            '<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>' +
            '<div class="modal-info-container">' +
            '<img class="modal-img" src="' +
            data.results[e].picture.large +
            '" alt="profile picture">' +
            '<h3 id="name" class="modal-name cap">' +
            data.results[e].name.first +
            " " +
            data.results[e].name.last +
            "</h3>" +
            '<p class="modal-text"><a href="mailto:' +
            data.results[e].email +
            '?Subject=Hello%20again" target="_top" style="text-decoration:none">' +
            data.results[e].email +
            "</a></p>" +
            '<p class="modal-text cap">' +
            data.results[e].location.city +
            "</p>" +
            "<hr>" +
            '<p class="modal-text"><a style="text-decoration:none" href="tel:' +
            data.results[e].cell +
            '">' +
            data.results[e].cell +
            "</a></p>" +
            '<p class="modal-text">' +
            data.results[e].location.street +
            ", " +
            data.results[e].location.state +
            ". " +
            data.results[e].nat +
            "</p>" +
            "</div>" +
            "</div>" +
            '<div class="modal-btn-container">' +
            '<button type="button" id="modal-prev" class="modal-prev btn">Prev</button>' +
            '<button type="button" id="modal-next" class="modal-next btn">Next</button>' +
            "</div>" +
            "</div>"
        );
        position = numberArray.indexOf(e);
        console.log("Numberarray", numberArray);
        console.log("position", position);
        console.log("neste", position+1); 
        console.log("neste innhold", numberArray[position+1]);

        console.log("event",e);
        $(".modal-close-btn").click(function() {
          $(".modal-container").remove();
          

        });

        $(".modal-prev").click(function() {
          console.log(position);
          if (position != 0) {
            console.log("jeg er en prev");
            $(".modal-container").remove();
            showPerson(numberArray[position-1]);
            
          }
        });

        $(".modal-next").click(function() {
          
          console.log(position);
          if (position != numberArray.length - 1) {
            console.log("jeg er en next");
            $(".modal-container").remove();
            showPerson(numberArray[position+1]);
          }
        });
      }

      //fjern knappen hvis siste delen eller første delen av rekken

      // Creating click event
      $(".card").click(function() {
        showPerson($(this).index());
      });

      $(".search-container").append(
        '<form action="#" method="get">' +
          '<input type="search" id="search-input" class="search-input" placeholder="Search...">' +
          "</form>"
      );

      $("#search-input").keyup(function(e) {
        input = document.getElementById("search-input");
        filter = input.value.toLocaleUpperCase();
        numberArray = [];
        cardDivs = $(".card");
        cardDivs.removeClass("hide");
        cardDivs.removeClass("show");
        console.log("jeg er en fis");
        console.log(numberArray);
        for (i = 0; i < cardDivs.length; i++) {
          if (
            cardDivs[i].textContent.toLocaleUpperCase().indexOf(filter) >= 0
          ) {
            $(".card")
              .eq(i)
              .show();
            numberArray.push(i);
          } else {
            $(".card")
              .eq(i)
              .hide();
          }
        }
      });
    }
  });
}); // Ends jQuery
