function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype.upTemp = function() {
  this.temperature++
};
