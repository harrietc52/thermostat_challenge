describe('ThermostatUI', function(){
  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('Thermostat.html');
    $.holdReady(false);
  });

  it('displays default temperature', function(){
     expect('#temp').toContain('20');
  });

  it('increases temperature with up button', function(){
    $("upTemp").click();
    expect('#temp').toContainText('21');
  });
});
