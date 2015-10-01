$( document ).ready (function() {

  $('#temp').text(thermostat.temperature);

  $('#upTemp').click(function() {
    thermostat.upTemp();
    $('#temp').text(thermostat.temperature);
    $('#temp').css("color", thermostat.colour);
  });

  $('#downTemp').click(function() {
    thermostat.downTemp();
    $('#temp').text(thermostat.temperature);
    $('#temp').css("color", thermostat.colour);
  });

  $('#changePowerSaving').click(function() {
    thermostat.changePowerSaving();
    $('#temp').text(thermostat.temperature);
    $('#temp').css("color", thermostat.colour);
  });

  $('#reset').click(function() {
    thermostat.reset();
    $('#temp').text(thermostat.temperature);
    $('#temp').css("color", thermostat.colour);
  });

  var location = window.location.search;
  // alert('help');
  console.log(location);

  var url = window.location.href
  var city = url.split("?location=");
  var currentCity = city[1]
  console.log(currentCity)
  // console.log(window.location.search);

  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q={london}',
    success: function(data){
      console.log(data)
      $('#weather').html('Current temperature in ' + (data.name)+ ': ' + (data.main.temp - 273.15).toFixed(1))
    }
  });


});
