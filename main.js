///////************************-------------sams shit--------------********************************////////////////////
$(document).ready(yelpRatingandPictures);
var yelp_data;
// function getWeatherFomDarkSky(){
//     var ajaxConfig = {
//         'dataType': 'jsonp',
//         'url': ' https://api.darksky.net/forecast/d89a8f31d58a881ce47cfc2ef67596a1/33.51941, -117.76292',
//         'method': 'GET',
//         success: function (result) {
//             let currentTemp = `${Math.ceil(result.currently.temperature)} F`;
//             let currentWeatherSummary = `Currently: ${result.currently.summary}`;
//             let feelsLikeTemp = `Feels Like: ${Math.ceil(result.currently.apparentTemperature)} F`;
//             let humidity = `Humidity: ${result.currently.humidity}%`;
//             let dailyHighTemp = `Today's High: ${Math.ceil(result.daily.data[0].temperatureMax)} F`;
//             let dailyLowTemp = `Today's Low: ${Math.ceil(result.daily.data[0].temperatureMin)} F`;
//             let dailyWeatherSummary = result.daily.data[0].summary;
//             let sunriseTime = `Sunrise: ${convertTimeToPacificDaylight(result.daily.data[0].sunriseTime)}`;
//             let sunsetTime = `Sunset: ${convertTimeToPacificDaylight(result.daily.data[0].sunsetTime)}`;

//             let localWeatherObject = {currentTemp, currentWeatherSummary, feelsLikeTemp, humidity, dailyHighTemp, dailyLowTemp, dailyWeatherSummary, sunriseTime, sunsetTime};
//             // console.log(localWeatherObject);

//             appendWeatherInfoToDom(localWeatherObject);
//         },
//         error: function(){
//         }
//     };
//     $.ajax(ajaxConfig);
// }

// function convertTimeToPacificDaylight(time){
//     let newTime = new Date(time*1000);
//     let hours = newTime.getHours();
//     let minutes = "0" + newTime.getMinutes();
//     if (hours > 12){
//         hours -=12;
//         let convertedTime = `${hours}:${minutes.substr(-2)} PM`;
//         return convertedTime;
//     }
//     let convertedTime = `${hours}:${minutes.substr(-2)} AM`;
//     return convertedTime;
// }

// function appendWeatherInfoToDom (obj){
//     let currentTemp = $("<p>").text(obj.currentTemp);
//     let currentWeatherSummary = $("<p>").text(obj.currentWeatherSummary);
//     let feelsLikeTemp =  $("<p>").text(obj.feelsLikeTemp);
//     let humidity =  $("<p>").text(obj.humidity);
//     let dailyHighTemp =  $("<p>").text(obj.dailyHighTemp);
//     let dailyLowTemp =  $("<p>").text(obj.dailyLowTemp);
//     let dailyWeatherSummary = $("<p>").text(obj.dailyWeatherSummary);
//     let sunriseTime = $("<p>").text(obj.sunriseTime);
//   
// }


// var map;
// var markerBase = 'https://maps.google.com/mapfiles/kml/shapes/';
// var markerImage = 'https://coronadotimes.com/wp-content/uploads/2014/07/585-IMG_10221.jpg';
// var myLatLng = {lat: 33.5427, lng: -117.7854};
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map-container'), {
//         center: myLatLng,
//         zoom: 12,
//         gestureHandling: "none",
//         disableDefaultUI: true,
//         mapTypeId: 'satellite'
//     });
//     var marker = new google.maps.Marker({
//         position: myLatLng,
//         map: map,
//         label: "A",
//         animation: google.maps.Animation.DROP,
//         title: 'Laguna Beach'

//     });
//     map.zoomTo(myLatLng);
// }

// $(document).ready(function(){
//     getWeatherFomDarkSky();
//     // yelpRatingandPictures();
// });

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
                console.log("this is my response",response);
                // let businessName = response.businesses;
                yelp_data = response;
                let businesses_Title = `yelp_data.businesses[0].name`;

                let businesses_Img = yelp_data.businesses[0].image_url;

                let businesses_Closed = yelp_data.businesses[0].is_closed;

                let businesses_Location = yelp_data.businesses[0].location.address1;

                let businesses_Price = yelp_data.businesses[0].price;


               let yelpObject = {businesses_Title, businesses_Img, businesses_Closed, businesses_Location, businesses_Price};
               console.log(yelpObject);

            append_Yelp_Data_To_Dom( yelpObject );
                
            },
            error: function() {
                console.error("The server returned no information.");
            }
        };
        $.ajax(ajaxConfig)
    }
    function append_Yelp_Data_To_Dom( obj ){
        // for(var i=0; i<yelp_data.businessess.length; i++){
        //     console.log(obj[i]);
       
              let businesses_Title = $("<p>").text(obj.businesses_Title);
              let businesses_Img = $("<img/>").attr('src', obj.businesses_Img);
                  businesses_Img.addClass('yelp_img');
              let businesses_Closed =  $("<p>").text(obj.businesses_Closed);
              let businesses_Location =  $("<p>").text(obj.businesses_Location);
              let businesses_Price =  $("<p>").text(obj.businesses_Price);
              let yelp_data_content = $("<div>");
                  yelp_data_content.addClass('yelp').append(businesses_Title,businesses_Img,businesses_Closed);
                  $('.yelp_container').append(yelp_data_content);

        }