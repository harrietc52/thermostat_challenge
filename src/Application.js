$( document ).ready (function() {

  $('#temp').text(thermostat.temperature);

  $('#upTemp').click(function() {
    thermostat.upTemp();
    $('#temp').text(thermostat.temperature);
  });

  $('#downTemp').click(function() {
    thermostat.downTemp();
    $('#temp').text(thermostat.temperature);
  });

  $('#changePowerSaving').click(function() {
    thermostat.changePowerSaving();
    $('#temp').text(thermostat.temperature);
    //
    // if(thermostat.changePowerSaving == true){
      // $('#changePowerSaving').text('ON');
    //  }
    // else if(thermostat.changePowerSaving == false) {
    //   $('#changePowerSaving').text('OFF');
    // };
  });

});
