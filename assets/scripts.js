// need to insert city search into URL and inject URL IMG
fetch('https://api.unsplash.com/search/photos?page=1&query=sanfrancisco&client_id=0jqDAD-zXewS00iMXPqH9-EWmxQwXtr_3FGl5EqT8c0')
    .then(response => response.json())
    .then(data => { console.log(data.results[0].links.download); cityPicutre = data.results[0].links.download })
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
