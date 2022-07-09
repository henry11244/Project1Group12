var userInput = $("#user-input")
var userInputs = document.querySelector("#user-input")
var searchButton = $("#search-button")
var count = 0
var errorMessage = document.querySelector('#errorMessage')
var savedCities = []

// local storage pull
if (JSON.parse(localStorage.getItem('savedCities') !== null)) { savedCities = JSON.parse(localStorage.getItem('savedCities')) }

function apiPull() {
    cityName = userInput.val()
    // need to insert city search into URL and inject URL IMG
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${cityName}&client_id=0jqDAD-zXewS00iMXPqH9-EWmxQwXtr_3FGl5EqT8c0`)
        .then(response => response.json())
        .then(data => {
            errorMessage.style.display = 'none'
            cityPicture = data.results[0].links.download
            console.log(cityPicture);
            var html = document.querySelector('html')
            html.style.backgroundImage = `url("${data.results[0].links.download}")`;
            localStorageAdd(cityName)



            // yelp API
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
        })
        .catch(err => { errorMessage.style.display = 'block' });

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



// add to local storage
localStorageAdd = (cityName) => {
    repeat = false
    for (var i = 0; i < savedCities.length; i++) {
        if (cityName.trim().toUpperCase() == savedCities[i].trim().toUpperCase()) { repeat = true }
    }
    if (repeat == false) {
        savedCities.unshift(cityName);
        localStorage.setItem('savedCities', JSON.stringify(savedCities))
    }
}


autocomplete();

// autocomplete
function autocomplete() {
    var currentFocus;
    if (userInputs) {
        userInputs.addEventListener("input", function (e) {
            var a, b, i, val = this.value;
            closeAllLists();
            if (!val) { return false; }
            console.log(i)
            currentFocus = -1;
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            this.parentNode.appendChild(a);
            for (i = 0; i < savedCities.length; i++) {

                if (savedCities[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                    b = document.createElement("DIV");
                    b.innerHTML = "<strong>" + savedCities[i].substr(0, val.length) + "</strong>";
                    b.innerHTML += savedCities[i].substr(val.length);
                    b.innerHTML += "<input type='hidden' value='" + savedCities[i] + "'>";
                    b.addEventListener("click", function (e) {
                        userInputs.value = this.getElementsByTagName("input")[0].value;
                        closeAllLists();
                    });
                    a.appendChild(b);
                }
            }
        })
    };
    if (userInputs) {
        userInputs.addEventListener("keydown", function (e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
                currentFocus++;
                addActive(x);
            } else if (e.keyCode == 38) {
                currentFocus--;
                addActive(x);
            } else if (e.keyCode == 13) {
                e.preventDefault();
                if (currentFocus > -1) {
                    if (x) x[currentFocus].click();
                }
            }
        })
    };
    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != userInputs) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    // document.addEventListener("click", function (e) {
    //     closeAllLists(e.target);
    // });
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