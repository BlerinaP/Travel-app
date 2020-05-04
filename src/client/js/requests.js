//COORDINATES
const geonamesUrl = 'http://api.geonames.org/searchJSON?q=';
const conUrl = '&maxRows=10';
const username = 'blerinapll';

//WEATHER
const weatherUrl = 'http://api.weatherbit.io/v2.0/forecast/daily?';
const key = '9e40836c03fa4c768b2e32db03f28b12';

//PIXABAY
const pixabayUrl = 'https://pixabay.com/api/?';
const pixkey = '16331258-98682fe7be2b155c1aff8736a';
const url = '&image_type=photo&pretty=true&category=places';


document.querySelector('.continue').addEventListener('click', mainFunction);


async function mainFunction(e){
    const location = document.getElementById('city').value;
    if(!location){
        return alert('You must add a city/country');
    }
    const dateLeaving = document.getElementById('leaving').value;
    const dateReturning = document.getElementById('returning').value;
    const img = document.getElementById('img');

     const coordinates = await getData(geonamesUrl + location + conUrl + '&username=' + username);
     const lat = coordinates.geonames[0].lat;
     const lng = coordinates.geonames[0].lng;

     const weather = await getData(weatherUrl + 'lon=' + lng + '&key=' + key + '&lat=' + lat);
     const picture = await getData(pixabayUrl + 'key=' + pixkey + '&q=' + location + url);
     document.querySelector('.resultpart').classList.remove('hide');
        //posting data in server
         return postData('/forecast',
          {
            minTemp: weather.data[0].min_temp,
            maxTemp:weather.data[0].max_temp,
            description: weather.data[0].weather.description,
            country: coordinates.geonames[0].countryName,
            cityName: coordinates.geonames[0].toponymName,
            picture: picture.hits[0].largeImageURL,
            dateLeaving: dateLeaving,
            dateReturning: dateReturning
         })

            //Getting data from /save
          .then(
              function(response){
               return getData('/save');
             }
           )
            //Updating Ui
          .then (
            function(update){
            const weather = `Min Temperature: ${update.minTemp}C - Max temperature: ${update.maxTemp}C`;
            document.getElementById('weather').innerHTML = weather;
            document.getElementById('country').innerText = update.country;
            document.getElementById('place').innerHTML = update.cityName;
            document.getElementById('description').innerHTML = update.description;
            document.getElementById('leavingdate').innerHTML = update.dateLeaving;
            document.getElementById('returningdate').innerHTML = update.dateReturning;

            if(!update.picture){
                img.src="https://unsplash.com/photos/uE2T1tCFsn8";
            }
            img.setAttribute('src', `${update.picture}`);

        }
    );


}

//Helper functions to get data and post data from an api.
const getData = async(url = '')=>{
    const response = await fetch(url);
    if(response.status === 404){
        alert('Error');
    }
    try{
        const data = response.json();
        return data;

    }catch(err){
        console.log(err);
    }
};

const postData = async (url = '', data = {}) => {
    console.log(data);
       const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;

    }catch(err) {
        console.log(err);
    }
};

