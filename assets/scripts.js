var userInput = $("#user-input")
var searchButton = $("#search-button")
var count = 0

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
        .catch(err => { console.log('hi') });

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

function clearCards() {
    for (var i = 0; i < 50; i++) {
        $('.restaurant-list').empty()
    }
}
var filter1 = $("#filter1")

function filterPrice(data) {
    count = 0
    for (var i = 0; i < 50; i++) {
        if (count < 10) {

            console.log(data.businesses[i].price)
            if (filter1.val()[0] == 1 && data.businesses[i].price == '$') {

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
                count++
            }
            else if (filter1.val()[0] == 2 && data.businesses[i].price == '$$') {
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
                count++
            }
            else if (filter1.val()[0] == 3 && data.businesses[i].price == '$$$') {
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
                count++
            }
            else if (filter1.val()[0] == 4 && data.businesses[i].price == '$$$$') {
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
                count++
            } else if (filter1.val()[0] == undefined) {
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
                count++
            }
        }
    }
}





// declare our variables for our button, user input, filter options, and toggle switch
// an event listener for our search button
// function to fetch and return data
// function to display the material
// function to clear the search info
// for each list item clicked display the name, address, contact info, picture and filters chosen (future goal?)




// function for filter options




// a function saying if the toggle switch is not selected then display restaurants in a top 10 list else display a random choice (SUFI_)





// function to save and return local storage for previous searches (HENRY)





//display image and link in each restaurant card (CHELSEA)