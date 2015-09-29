function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
};

Thermostat.prototype.powerSavingOff = function() {
    this.powerSaving = false;
  };

Thermostat.prototype.powerSavingOn = function() {
    this.powerSaving = true;
  };

Thermostat.prototype.reset = function() {
    this.temperature = 20;
  };

Thermostat.prototype.upTemp = function() {
    if (this.powerSaving === true && this.temperature >= 25) {
      throw Error("Power saving 'on', can not go above 25 degrees");
    } else if (this.powerSaving === false && this.temperature >= 32) {
      throw Error("Power saving 'off', can not go above 32 degrees");
    } else {
      this.temperature++;
    };
  };

Thermostat.prototype.downTemp = function() {
  if (this.temperature <= 10) {
    throw Error("Minimum temperature is 10 degrees");
  };
  this.temperature--;
};
