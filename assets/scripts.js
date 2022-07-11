//these are our global variables
var userInput = $("#user-input")
var form = document.querySelector("#form")
var userInputs = document.querySelector("#user-input")
var searchButton = $("#search-button")
var count = 0
var errorMessage = document.querySelector('#errorMessage')
var savedCities = []
var filter2 = $("#filter2")
var filter1 = $("#filter1")
var checkbox = $(".checkbox")

randomNumber = (maxNum) => { return Math.floor(Math.random() * maxNum) }


// local storage pull
if (JSON.parse(localStorage.getItem('savedCities') !== null)) { savedCities = JSON.parse(localStorage.getItem('savedCities')) }

function apiPull() {
    cityName = userInput.val()
    //   City search API to return lat/lon
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName},US&limit=5&appid=7acb10b31a225ce5f6e678b28717604c`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            lat = data[0].lat
            lon = data[0].lon
            // yelp API
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
            // background image api
            fetch(`https://api.unsplash.com/search/photos?page=1&query=${cityName}&client_id=0jqDAD-zXewS00iMXPqH9-EWmxQwXtr_3FGl5EqT8c0`)
                .then(response => response.json())
                .then(data => {
                    errorMessage.style.display = 'none'
                    cityPicture = data.results[0].links.download
                    console.log(cityPicture);
                    var html = document.querySelector('html')
                    html.style.backgroundImage = `url("${data.results[0].links.download}")`;
                    html.style.backgroundAttachment = "fixed";
                    html.style.backgroundSize = "100% 100%";
                    localStorageAdd(cityName)
                })
        }).catch(err => {
            errorMessage.style.display = 'block';
            anime({
                targets: 'main',
                easing: 'linear',
                duration: 300,
                translateX: [
                    {
                        value: 50,
                    },
                    {
                        value: -50,
                    },
                    {
                        value: 50,
                    },
                    {
                        value: 0,
                    },
                ],
            });
        });
}

//creates event listener for search button
searchButton.on("click", function () {
    clearCards()
    apiPull()
    console.log(checkbox[0].checked)
})

// Removes existing resturants everytime user clicks search
function clearCards() {
    for (var i = 0; i < 50; i++) {
        $('.restaurant-list').empty()
    }
}

// function for creating resturant list
function listCreation(i, data) {
    restaurantListContainer = document.querySelector(".restaurant-list")
    restaurantCard = document.createElement("div")
    restaurantImage = document.createElement("img")
    restaurantImage.src = data.businesses[i].image_url
    restaurantCard.append(restaurantImage)
    restaurantName = document.createElement("a")
    restaurantName.setAttribute("href", data.businesses[i].url)
    restaurantName.setAttribute("target", "_blank")
    restaurantName.textContent = data.businesses[i].name + " " + data.businesses[i].rating + "⭐"
    restaurantCard.append(restaurantName)
    restaurantAddress = document.createElement("li")
    restaurantAddress.textContent = data.businesses[i].location.display_address[0] + " " + data.businesses[i].location.display_address[1]
    restaurantCard.append(restaurantAddress)
    restaurantPhone = document.createElement("li")
    restaurantPhone.textContent = data.businesses[i].display_phone
    restaurantCard.append(restaurantPhone)
    restaurantCard.setAttribute('class', 'card')
    restaurantListContainer.append(restaurantCard)
    count++
}

// for category filter, searches all alias for each resturant
function categoriesSearch(i, data) { for (var x = 0; x < data.businesses[i].categories.length; x++) { if (data.businesses[i].categories[x].alias.includes(filter2.val()[0])) { return true } } }

// function for limiting list to 10 and for checking resturants against filters before adding them to page
function filterPrice(data) {
    count = 0
    for (var i = 0; i < 50; i++) {
        if (count < 10) {
            if ((filter1.val()[0] == data.businesses[i].price || filter1.val()[0] == undefined) &&
                (categoriesSearch(i, data) || filter2.val()[0] == undefined)) {
                listCreation(i, data)
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

// submits form on enter key
userInput.on("keydown", function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        clearCards()
        apiPull()
    }
})

// autocomplete
{
    if (userInput) {
        userInput.on("input", function (e) {
            closeAllLists();
            if (!this.value) { return false; }
            var autocompleteContainer = document.createElement("DIV");
            autocompleteContainer.setAttribute("id", this.id + "autocomplete-list");
            autocompleteContainer.setAttribute("class", "autocomplete-items");
            form.append(autocompleteContainer);
            for (i = 0; i < savedCities.length; i++) {
                if (savedCities[i].substr(0, this.value.length).toUpperCase() == this.value.toUpperCase()) {
                    var autocompleteContainerElement = document.createElement("DIV");
                    autocompleteContainerElement.innerHTML = "<strong>" + savedCities[i].substr(0, this.value.length) + "</strong>";
                    autocompleteContainerElement.innerHTML += savedCities[i].substr(this.value.length);
                    autocompleteContainerElement.innerHTML += "<input type='hidden' value='" + savedCities[i] + "'>";
                    autocompleteContainerElement.addEventListener("click", function (e) {
                        userInput[0].value = this.getElementsByTagName("input")[0].value;
                        closeAllLists();
                    });
                    autocompleteContainer.append(autocompleteContainerElement);
                }
            }
        })
    };
}

// function to close autocomplete which is triggered below on page click
function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != userInput) {
            x[i].parentNode.removeChild(x[i]);
        }
    }
}
// closes autocomplete if clicked elsewhere on webpage
document.addEventListener("click", function () {
    closeAllLists();
});

