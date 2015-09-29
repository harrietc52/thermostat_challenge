describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start off at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("temperature increases by 1 degree using up function", function() {
    thermostat.upTemp();
    expect(thermostat.temperature).toEqual(21);
  });
});
