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

  var currentCity = "London"

  $('#submit').click(function() {
    currentCity = $('#currentCity').val();
    locationReset();
  });

  console.log(currentCity)

   locationReset = function() {
      $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q={' + currentCity +'}',
      success: function(data){
        console.log(data)
        $('#weather').html('Current temperature in ' + currentCity + ': ' + (data.main.temp - 273.15).toFixed(1))
      }
    });
  };
  locationReset();

});
