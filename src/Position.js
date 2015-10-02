function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        $("#position").append("Geolocation is not supported by this browser.");
    };
};

function showPosition(position) {
  $("#position").append("Latitude: " + position.coords.latitude.toFixed(2) +
  "<br>Longitude: " + position.coords.longitude.toFixed(2));
};

function getWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(weatherRequest);
    } else {
        $("#position").append("Geolocation is not supported by this browser.");
    };
};

function weatherRequest(position) {
  var lat = position.coords.latitude.toFixed(2)
  var lon = position.coords.longitude.toFixed(2)
   $.ajax({
   url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat +'&lon=' + lon + '',
   success: function(data){
     console.log(data)
     $('#weather').html('Current temperature in ' + data.name + ': ' + (data.main.temp - 273.15).toFixed(1))
   }
  });
 };

getLocation();
getWeather();
