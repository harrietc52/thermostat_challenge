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

getLocation();