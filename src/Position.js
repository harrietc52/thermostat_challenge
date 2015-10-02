function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        $("#position-coords").append("Geolocation is not supported by this browser.");
    };
};

function showPosition(position) {
  console.log(position);
  $("#position-coords").html("<br>Latitude: " + position.coords.latitude.toFixed(2) +
  "<br>Longitude: " + position.coords.longitude.toFixed(2));
};

function getWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(weatherRequest);
    } else {
        $("#position-coords").html("Geolocation is not supported by this browser.");
    };
};

function weatherRequest(position) {
  var lat = position.coords.latitude
  var lon = position.coords.longitude
   $.ajax({
   url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat.toFixed(2) +'&lon=' + lon.toFixed(2) + '',
   success: function(data){
     console.log(data)
     $('#position-name').html(data.name);
     $('#weather').html('Current temperature in ' + data.name + ': ' + (data.main.temp - 273.15).toFixed(1))
   }
  });
 };

getLocation();
getWeather();

console.log(lat)
console.log(lon)

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
