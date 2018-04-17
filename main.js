///////************************-------------sams shit--------------********************************////////////////////
//weather API
function getWeatherFomDarkSky(){
    var ajaxConfig = {
        'dataType': 'jsonp',
        'url': ' https://api.darksky.net/forecast/d89a8f31d58a881ce47cfc2ef67596a1/42.3601,-71.0589',
        'method': 'GET',
        // 'data': {
        //     'api_key': 'RZ1LqWOzVl'
        // },
        success: function (result) {
            console.log(result)
            let currentTemp = result.currrently.temperature;
            let currentWeatherSummary = result.currently.summary;
            let feelsLikeTemp = result.currently.apparentTemperature;
            let humidity = `${result.currently.humidity} %`;
            let dailyHighTemp = results.daily[0].temperatureMax;
            let dailyLowTemp = results.daily[0].temperatureMin;
        },
        error: function(){
        }
    };
    $.ajax(ajaxConfig);
}


$(document).ready(getWeatherFomDarkSky);

///////************************-------------Harrison's shit--------------********************************////////////////////





///////************************-------------Jean-Paul's shit--------------********************************////////////////////