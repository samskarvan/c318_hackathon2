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
        mapTypeId: 'terrain',
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ebe3cd"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#523735"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f1e6"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ebe3cd"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#dcd2be"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ae9e90"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ebe3cd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#93817c"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#a5b076"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#447530"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#b9d3c2"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#92998d"
                    }
                ]
            }
        ]
    });
    var iconBase = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var image = {
        url: 'assets/Images/beachUmbrella.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(50, 50),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 0)
    };
    var marker = new google.maps.Marker({
        position: lagunaCenter,
        map: map,
        // label: "A",
        icon: image,
        animation: google.maps.Animation.DROP,
        title: 'Laguna Beach'

    });
    map.zoomTo(myLatLng);
}

$(document).ready(function(){
    getWeatherFomDarkSky();
});

///////************************-------------Harrison's shit--------------********************************////////////////////





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