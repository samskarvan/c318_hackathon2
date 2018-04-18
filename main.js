///////************************-------------sams shit--------------********************************////////////////////
$(document).ready(yelpRatingandPictures);

function getWeatherFomDarkSky(){
    var ajaxConfig = {
        'dataType': 'jsonp',
        'url': ' https://api.darksky.net/forecast/d89a8f31d58a881ce47cfc2ef67596a1/33.51941, -117.76292',
        'method': 'GET',
        success: function (result) {
            let currentTemp = `${Math.ceil(result.currently.temperature)} F`;
            let currentWeatherSummary = `Currently: ${result.currently.summary}`;
            let feelsLikeTemp = `Feels Like: ${Math.ceil(result.currently.apparentTemperature)} F`;
            let humidity = `Humidity: ${result.currently.humidity}%`;
            let dailyHighTemp = `Today's High: ${Math.ceil(result.daily.data[0].temperatureMax)} F`;
            let dailyLowTemp = `Today's Low: ${Math.ceil(result.daily.data[0].temperatureMin)} F`;
            let dailyWeatherSummary = result.daily.data[0].summary;
            let sunriseTime = `Sunrise: ${convertTimeToPacificDaylight(result.daily.data[0].sunriseTime)}`;
            let sunsetTime = `Sunset: ${convertTimeToPacificDaylight(result.daily.data[0].sunsetTime)}`;

            let localWeatherObject = {currentTemp, currentWeatherSummary, feelsLikeTemp, humidity, dailyHighTemp, dailyLowTemp, dailyWeatherSummary, sunriseTime, sunsetTime};
            // console.log(localWeatherObject);

            appendWeatherInfoToDom(localWeatherObject);
        },
        error: function(){
        }
    };
    $.ajax(ajaxConfig);
}

function convertTimeToPacificDaylight(time){
    let newTime = new Date(time*1000);
    let hours = newTime.getHours();
    let minutes = "0" + newTime.getMinutes();
    if (hours > 12){
        hours -=12;
        let convertedTime = `${hours}:${minutes.substr(-2)} PM`;
        return convertedTime;
    }
    let convertedTime = `${hours}:${minutes.substr(-2)} AM`;
    return convertedTime;
}

function appendWeatherInfoToDom (obj){
    let currentTemp = $("<p>").text(obj.currentTemp);
    let currentWeatherSummary = $("<p>").text(obj.currentWeatherSummary);
    let feelsLikeTemp =  $("<p>").text(obj.feelsLikeTemp);
    let humidity =  $("<p>").text(obj.humidity);
    let dailyHighTemp =  $("<p>").text(obj.dailyHighTemp);
    let dailyLowTemp =  $("<p>").text(obj.dailyLowTemp);
    let dailyWeatherSummary = $("<p>").text(obj.dailyWeatherSummary);
    let sunriseTime = $("<p>").text(obj.sunriseTime);
    let sunsetTime = $("<p>").text(obj.sunsetTime);
    let currentDiv = $("<div>");
    currentDiv.addClass('current').append(currentTemp, currentWeatherSummary, feelsLikeTemp, humidity, dailyWeatherSummary);
    let highAndLowTemp = $("<div>");
    highAndLowTemp.addClass('high-low').append(dailyHighTemp, dailyLowTemp);
    let sunriseSunsetTime = $("<div>");
    sunriseSunsetTime.addClass('sunrise-sunset').append(sunriseTime, sunsetTime);
    $('.weather').append(currentDiv, sunriseSunsetTime, highAndLowTemp);
}


var map;
var markerBase = 'https://maps.google.com/mapfiles/kml/shapes/';
var markerImage = 'https://coronadotimes.com/wp-content/uploads/2014/07/585-IMG_10221.jpg';
var lagunaCenter = {lat:33.522759, lng: -117.763314};

function initMap() {
    map = new google.maps.Map(document.getElementById('map-container'), {
        center: lagunaCenter,
        zoom: 14.05,
        gestureHandling: "none",
        disableDefaultUI: true,
        mapTypeId: 'satellite'
    });
    var marker = new google.maps.Marker({
        position: lagunaCenter,
        map: map,
        label: "A",
        animation: google.maps.Animation.DROP,
        title: 'Laguna Beach'

    });
    dropMarker();
}

$(document).ready(function(){
    getWeatherFomDarkSky();
});

///////************************-------------Harrison's shit--------------********************************////////////////////

var beachArray = [
    "Cameo Cove",
    "Emerald Bay",
    "Crescent Bay",
    "Shaws Cove",
    "Fishermans Cove",
    "Divers Cove",
    "Heisler Park Beach",
    "Main Beach",
    "Thalia Street Beach",
    "Woods Cove Beach",
    "Moss Cove",
    "Victoria Beach",
    "Treasure Island Beach",
    "Aliso Beach",
    "Coast Royale Beach",
    "Table Rock Beach",
    "1000 Steps Beach"
];

var beachIdArray= [
    "ChIJebS6-Rzk3IARQjvVK17E-H4",

    "EiJFbWVyYWxkIEJheSwgTGFndW5hIEJlYWNoLCBDQSwgVVNB",

    "EiNDcmVzY2VudCBCYXksIExhZ3VuYSBCZWFjaCwgQ0EsIFVTQQ",

    "ChIJN44pRjrk3IAR7UHsqYmz59g",

    "ChIJCczbADrk3IARyEU4kGA23IA",

    "ChIJdct2SDfk3IAR30_IxuG-S4Q",

    "ChIJKSemcTbk3IARS9eQ4c_fJcY",

    "ChIJH4Y5okrk3IAR2siC9QLVqCY",

    "ChIJh77BF7Ll3IARvW4krXcoTic",

    "ChIJ7UfHk6fl3IARn2CG_pg08cY",

    "ChIJ24QSxQnl3IAR6NkD-jHsJRg",

    "ChIJE76HsRLl3IARM9c5begLxOg",

    "ChIJtxPwxWzl3IARgHe-w_aL1AM",

    "ChIJU3TgxGnl3IAR26h3tmJHpSA",

    "ChIJmw_lV1vl3IARgxDkQ9SbKxs",

    "ChIJN2AXi1rl3IARndYdtkSYiRo",

    "EicxMDAwIFN0ZXBzIEJlYWNoLCBMYWd1bmEgQmVhY2gsIENBLCBVU0E"

];

var beachLongLat = [
    [33.55391, -117.8161],
    [33.55163, -117.80913],
    [33.54665, -117.80159],
    [33.54569, -117.79804],
    [33.54545, -117.79587],
    [33.54466, -117.79398],
    [33.54341, -117.79074],
    [33.54172, -117.78477],
    [33.5359, -117.77948],
    [33.52704, -117.77098],
    [33.5254, -117.76906],
    [33.51941, -117.76292],
    [33.51449, -117.75946],
    [33.50995, -117.75245],
    [33.50537, -117.74861],
    [33.50198, -117.7464],
    [33.49776, -117.74143]
];
function dropMarker() {
    for(latlngArrayIndex = 0; latlngArrayIndex < beachLongLat.length; latlngArrayIndex++) {
        var marker = new google.maps.Marker({
            position: {lat: beachLongLat[latlngArrayIndex][0], lng: beachLongLat[latlngArrayIndex][1]},
            map: map,
            label: ""+latlngArrayIndex,
            animation: google.maps.Animation.DROP,
        });
    }
}

///////************************-------------Jean-Paul's shit--------------********************************////////////////////
//  find by radius
// Cameo Cove  33.55391, -117.8161
// Emerald Bay  33.55163, -117.80913
// Crescent Bay  33.54665, -117.80159
// Shaws Cove  33.54569, -117.79804
// Fishermans Cove  33.54545, -117.79587
// Divers Cove  33.54466, -117.79398
// Heisler Park Beach  33.54341, -117.79074
// Main Beach 33.54172, -117.78477
// Thalia Street Beach / Anita Street Beach / Brooks Street Beach/ Pearl Street Beach - 33.5359, -117.77948
// Woods Cove Beach  33.52704, -117.77098
// Moss Cove  33.5254, -117.76906
// Victoria Beach 33.51941, -117.76292
// Treasure Island Beach  33.51449, -117.75946
// Aliso Beach 33.50995, -117.75245
// Coast Royale Beach 33.50537, -117.74861
// Table Rock Beach 33.50198, -117.7464
// 1000 Steps Beach 33.49776, -117.74143
    function yelpRatingandPictures() {
        console.log("Gotcha");
        let latLng = {
            lat: 33.6846,
            lng: -117.8265
        }
        let type="coffee"
        let ajaxConfig = {
            dataType: "json",
            url: "http://danielpaschal.com/yelpproxy.php",
            method: "GET",
            data: {
                latitude: latLng.lat,
                longitude: latLng.lng,
                term: type,
                radius: 40000,
                api_key:
                    "VFceJml03WRISuHBxTrIgwqvexzRGDKstoC48q7UrkABGVECg3W0k_EILnHPuHOpSoxrsX07TkDH3Sl9HtkHQH8AwZEmj6qatqtCYS0OS9Ul_A02RStw_TY7TpteWnYx"
            },
            success: function(response) {
                console.log(response);
            },
            error: function() {
                console.error("The server returned no information.");
            }
        };
        $.ajax(ajaxConfig)
    }