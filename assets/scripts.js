var userInput = $("#user-input")
var searchButton = $("#search-button")



// need to insert city search into URL and inject URL IMG
fetch('https://api.unsplash.com/search/photos?page=1&query=sanfrancisco&client_id=0jqDAD-zXewS00iMXPqH9-EWmxQwXtr_3FGl5EqT8c0')
    .then(response => response.json())
    .then(data => {
        console.log(data.results[0].links.download); cityPicture = data.results[0].links.download

        $('html').css(`background-image: url("${cityPicture}")`)
    })
    .catch(err => console.error(err));

$.ajax({
    url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972',
    headers: {
        'Authorization': 'Bearer lV49BOJRAf232C8bfbXTKpfcxghVwHWqHBwUbGiGFGsEaaIseKD2TOjlYmo9pag2R2YnEGMuZZzNoWe2m0akjEMr44OQMxFdEK1gfMWESoAD2gRelaIotNsBa9XFYnYx',
    },
    method: 'GET',
    dataType: 'json',
    success: function (data) {
        console.log(data)
    }
})

fetch('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=7acb10b31a225ce5f6e678b28717604c')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

searchButton.on("click", function () {
    console.log("functionsssssss")
})





// declare our variables for our button, user input, filter options, and toggle switch








// an event listener for our search button




// function to fetch and return data



// function to display the material





// a function saying if the toggle switch is not selected then display restaurants in a top 10 list


// else display a random choice


// function to save and return local storage for previous searches


// for each list item clicked display the name, address, contact info, picture and filters chosen



// function to clear the search info

















