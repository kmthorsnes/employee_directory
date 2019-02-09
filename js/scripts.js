// Starts jQuery
$(document).ready(function() {
  // Creates empty array for pushing index into.
  indexArray = [];

  // For setting numbers of users to be generated
  numbersOfUsers = 12;

  // Get users from randomuser.me
  $.ajax({
    url: "https://randomuser.me/api/?results=" + numbersOfUsers,
    dataType: "json",
    success: function(data) {
      $.each(data.results, function(i) {
        // push each person's index into the array
        indexArray.push(i);
        let firstName = data.results[i].name.first;
        let lastName = data.results[i].name.last;
        let email = data.results[i].email;
        let mediumPhoto = data.results[i].picture.medium;
        // Capitalizing the first letters of each word in city and state. Codebase from: https://stackoverflow.com/a/43376967
        let city = data.results[i].location.city
          .toLowerCase()
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        let state = data.results[i].location.state
          .toLowerCase()
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        // Creating card divs and inserting data for each
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
        // Adds email as hyperlinked mailto
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
        // adds class for getting correct CSS
        $(".card" + i).addClass("card");
        $(".card-img-container" + i).addClass(".card-img-container");
        $(".card-info-container" + i).addClass(".card-info-container");
      });

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

        position = indexArray.indexOf(e);
        // If the person is the first in the array, the prev-button is hidden.
        if (position == 0) {
          $(".modal-prev").hide();
        }

        // If the person is the last in the array, the prev-button is hidden.
        if (position == indexArray.length - 1) {
          $(".modal-next").hide();
        }

        // Removes the modal if exit button is clicked
        $(".modal-close-btn").click(function() {
          $(".modal-container").remove();
        });

        // Shows the previous person if the person showing is not the first in the array/filtered
        $(".modal-prev").click(function() {
          if (position != 0) {
            $(".modal-container").remove();
            showPerson(indexArray[position - 1]);
          }
        });

        // Shows the next person if the person showing is not the last in the array/filtered
        $(".modal-next").click(function() {
          if (position != indexArray.length - 1) {
            $(".modal-container").remove();
            showPerson(indexArray[position + 1]);
          }
        });
      }

      // Shows modal if card is clicked
      $(".card").click(function() {
        showPerson($(this).index());
      });

      // Exceeds:
        // Creates search input
      $(".search-container").append(
        '<form action="#" method="get">' +
          '<input type="search" id="search-input" class="search-input" placeholder="Search...">' +
          "</form>"
      );
      // Exceeds: 
        // Every time something changes in the search field the this function fires
      $("#search-input").on("input", function(e) {
        input = document.getElementById("search-input");
        filter = input.value.toLocaleUpperCase();
        // Empties the indexArray
        indexArray = [];
        cardDivs = $(".card");
        for (i = 0; i < cardDivs.length; i++) {
          if (
            cardDivs[i].textContent.toLocaleUpperCase().indexOf(filter) >= 0
          ) {
            $(".card")
              .eq(i)
              .show();
            // If a search match is found the persons index is pushed into the array
            indexArray.push(i);
          } else {
            // Hides the persons who are not matching with the search
            $(".card")
              .eq(i)
              .hide();
          }
        }
      });
    }
  });

  // Exceeds:
  // Change the font of the h1
  $("h1").css({ "font-family": "Poppins" });
  // Change the background-color
  document.body.style.backgroundColor = "#ffefd7";
}); // Ends jQuery