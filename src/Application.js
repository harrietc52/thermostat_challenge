$( document ).ready (function() {

  $('#temp').text(thermostat.temperature);

  $('#upTemp').click(function() {
    thermostat.upTemp();
    $('#temp').text(thermostat.temperature);
  });
  //
  // $('#downTemp').click(function() {
  //   thermostat.downTemp();
  //   $('#temp').text(thermostat.temperature);
  // });

});
