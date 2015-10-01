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

  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q={london}',
    success: function(data){
      console.log(data)
      $('#weather').html('Current Temperatre  ' + (data.main.temp - 273).toFixed(1))
    }
  });

});
