///////************************-------------sams shit--------------********************************////////////////////
//weather API
// function getWeatherFomDarkSky(){
//         var ajaxConfig = {
//             'dataType': 'jsonp',
//             'url': ' https://api.darksky.net/forecast/d89a8f31d58a881ce47cfc2ef67596a1/42.3601,-71.0589',
//             'method': 'GET',
//             // 'data': {
//             //     'api_key': 'RZ1LqWOzVl'
//             // },
//             success: function (result) {
//                 console.log(result)
//                 let currentTemp = result.currrently.temperature;
//                 let currentWeatherSummary = result.currently.summary;
//                 let feelsLikeTemp = result.currently.apparentTemperature;
//                 let humidity = `${result.currently.humidity} %`;
//                 let dailyHighTemp = results.daily[0].temperatureMax;
//                 let dailyLowTemp = results.daily[0].temperatureMin;
//             },
//             error: function(){
//             }
//         };
//         $.ajax(ajaxConfig);
//     }
$(document).ready(yelpRatingandPictures);

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