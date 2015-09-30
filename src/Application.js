$( document ).ready (function() {

  $('#temp').text(thermostat.temperature);

  $('#upTemp').click(function(event) {
    thermostat.upTemp();
    $('#temp').text(thermostat.temperature);
  });

});
