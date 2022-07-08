var userInput = $("#user-input")
var searchButton = $("#search-button")

function apiPull() {
    cityName = userInput.val()
    // need to insert city search into URL and inject URL IMG
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${cityName}&client_id=0jqDAD-zXewS00iMXPqH9-EWmxQwXtr_3FGl5EqT8c0`)
        .then(response => response.json())
        .then(data => {
            cityPicture = data.results[0].links.download
            console.log(cityPicture);
            var html = document.querySelector('html')
            html.style.backgroundImage = `url("${data.results[0].links.download}")`;
        })
        .catch(err => console.error(err));

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=7acb10b31a225ce5f6e678b28717604c`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            lat = data[0].lat
            lon = data[0].lon
            $.ajax({
                url: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${lon}&limit=50`,
                headers: {
                    'Authorization': 'Bearer lV49BOJRAf232C8bfbXTKpfcxghVwHWqHBwUbGiGFGsEaaIseKD2TOjlYmo9pag2R2YnEGMuZZzNoWe2m0akjEMr44OQMxFdEK1gfMWESoAD2gRelaIotNsBa9XFYnYx',
                },
                method: 'GET',
                dataType: 'json',
                success: function (data) {
                    console.log(data)
                    // restaurantList(data)
                    filterPrice(data)

                }
            })

        })
        .catch(err => console.error(err));



}

//creates event listener for search button
searchButton.on("click", function () {
    clearCards()
    apiPull()
})

// function restaurantList(data) {
//     for (var i = 0; i < 10; i++) {
//         restaurantListContainer = document.querySelector(".restaurant-list")
//         restaurantCard = document.createElement("div")
//         restaurantName = document.createElement("li")
//         restaurantListContainer.append(restaurantCard)
//         restaurantName.textContent = data.businesses[i].name + " " + data.businesses[i].rating + "⭐"
//         restaurantCard.append(restaurantName)
//         restaurantAddress = document.createElement("li")
//         restaurantAddress.textContent = data.businesses[i].location.display_address[0] + " " + data.businesses[i].location.display_address[1]
//         restaurantCard.append(restaurantAddress)
//         restaurantPhone = document.createElement("li")
//         restaurantPhone.textContent = data.businesses[i].display_phone
//         restaurantCard.append(restaurantPhone)
//         restaurantCard.setAttribute('class', 'card')
//     }
// }

function clearCards() {
    for (var i = 0; i < 10; i++) {
        $('.restaurant-list').empty()
    }
}

function filterPrice(data) {
    const price1 = $('#price-option1')
    const price2 = $('#price-option2')
    const price3 = $('#price-option3')
    const price4 = $('#price-option4')
    for (var i = 0; i < 10; i++) {
    if (price1.val() && data.businesses[i].price == '$') {
        restaurantListContainer = document.querySelector(".restaurant-list")
        restaurantCard = document.createElement("div")
        restaurantName = document.createElement("li")
        restaurantListContainer.append(restaurantCard)
        restaurantName.textContent = data.businesses[i].name + " " + data.businesses[i].rating + "⭐"
        restaurantCard.append(restaurantName)
        restaurantAddress = document.createElement("li")
        restaurantAddress.textContent = data.businesses[i].location.display_address[0] + " " + data.businesses[i].location.display_address[1]
        restaurantCard.append(restaurantAddress)
        restaurantPhone = document.createElement("li")
        restaurantPhone.textContent = data.businesses[i].display_phone
        restaurantCard.append(restaurantPhone)
        restaurantCard.setAttribute('class', 'card')
    }
    else if (price2.val() && data.businesses[i].price == '$$') {
        restaurantListContainer = document.querySelector(".restaurant-list")
        restaurantCard = document.createElement("div")
        restaurantName = document.createElement("li")
        restaurantListContainer.append(restaurantCard)
        restaurantName.textContent = data.businesses[i].name + " " + data.businesses[i].rating + "⭐"
        restaurantCard.append(restaurantName)
        restaurantAddress = document.createElement("li")
        restaurantAddress.textContent = data.businesses[i].location.display_address[0] + " " + data.businesses[i].location.display_address[1]
        restaurantCard.append(restaurantAddress)
        restaurantPhone = document.createElement("li")
        restaurantPhone.textContent = data.businesses[i].display_phone
        restaurantCard.append(restaurantPhone)
        restaurantCard.setAttribute('class', 'card')
    }
    else if (price3.val() && data.businesses[i].price == '$$$') {
        restaurantListContainer = document.querySelector(".restaurant-list")
        restaurantCard = document.createElement("div")
        restaurantName = document.createElement("li")
        restaurantListContainer.append(restaurantCard)
        restaurantName.textContent = data.businesses[i].name + " " + data.businesses[i].rating + "⭐"
        restaurantCard.append(restaurantName)
        restaurantAddress = document.createElement("li")
        restaurantAddress.textContent = data.businesses[i].location.display_address[0] + " " + data.businesses[i].location.display_address[1]
        restaurantCard.append(restaurantAddress)
        restaurantPhone = document.createElement("li")
        restaurantPhone.textContent = data.businesses[i].display_phone
        restaurantCard.append(restaurantPhone)
        restaurantCard.setAttribute('class', 'card')
    }
    else if (price4.val() && data.businesses[i].price == '$$$$') {
        restaurantListContainer = document.querySelector(".restaurant-list")
        restaurantCard = document.createElement("div")
        restaurantName = document.createElement("li")
        restaurantListContainer.append(restaurantCard)
        restaurantName.textContent = data.businesses[i].name + " " + data.businesses[i].rating + "⭐"
        restaurantCard.append(restaurantName)
        restaurantAddress = document.createElement("li")
        restaurantAddress.textContent = data.businesses[i].location.display_address[0] + " " + data.businesses[i].location.display_address[1]
        restaurantCard.append(restaurantAddress)
        restaurantPhone = document.createElement("li")
        restaurantPhone.textContent = data.businesses[i].display_phone
        restaurantCard.append(restaurantPhone)
        restaurantCard.setAttribute('class', 'card')
    } else {
        restaurantListContainer = document.querySelector(".restaurant-list")
        restaurantCard = document.createElement("div")
        restaurantName = document.createElement("li")
        restaurantListContainer.append(restaurantCard)
        restaurantName.textContent = data.businesses[i].name + " " + data.businesses[i].rating + "⭐"
        restaurantCard.append(restaurantName)
        restaurantAddress = document.createElement("li")
        restaurantAddress.textContent = data.businesses[i].location.display_address[0] + " " + data.businesses[i].location.display_address[1]
        restaurantCard.append(restaurantAddress)
        restaurantPhone = document.createElement("li")
        restaurantPhone.textContent = data.businesses[i].display_phone
        restaurantCard.append(restaurantPhone)
        restaurantCard.setAttribute('class', 'card')
    }
    }
}





// declare our variables for our button, user input, filter options, and toggle switch








// an event listener for our search button




// function to fetch and return data



// function to display the material





// a function saying if the toggle switch is not selected then display restaurants in a top 10 list


// else display a random choice


// function to save and return local storage for previous searches


// for each list item clicked display the name, address, contact info, picture and filters chosen



// function to clear the search info

















